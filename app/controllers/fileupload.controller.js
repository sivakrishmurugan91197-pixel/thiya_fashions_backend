const logger = require('../utils/logger');
const { 
    S3Client, 
    ListObjectsV2Command, 
    DeleteObjectsCommand, 
    PutObjectCommand 
} = require('@aws-sdk/client-s3');

const s3 = require('../config/s3');
const path = require('path');
const { sequelize, Sequelize } = require("../models");
const multer = require('multer');
const { GetObjectCommand } = require('@aws-sdk/client-s3');
const { getSignedUrl } = require('@aws-sdk/s3-request-presigner');


const storage = multer.memoryStorage(); // Stores files in memory

/**
 * Deletes all files inside an S3 folder
 */
const emptyS3Folder = async (folderPath) => {
    try {
        const listParams = {
            Bucket: process.env.AWS_S3_BUCKET_NAME,
            Prefix: folderPath // Target folder
        };

        const listedObjects = await s3.send(new ListObjectsV2Command(listParams));

        if (!listedObjects.Contents || listedObjects.Contents.length === 0) {
            console.log(`✅ Folder '${folderPath}' is already empty.`);
            return;
        }

        // Prepare delete parameters
        const deleteParams = {
            Bucket: process.env.AWS_S3_BUCKET_NAME,
            Delete: { Objects: listedObjects.Contents.map(obj => ({ Key: obj.Key })) }
        };

        // Delete all files in the folder
        await s3.send(new DeleteObjectsCommand(deleteParams));
        console.log(` Deleted all files from '${folderPath}'`);
        
    } catch (error) {
        console.error(`❌ Error emptying folder '${folderPath}':`, error);
    }
};

/**
 * Handles uploading document images (front & back)
 */
exports.documentUpload = async (req, res) => {
    try {
      
        console.log("🔍 Checking req.body:", req.body);
        console.log("🔍 Checking req.files:", req.files);


        // Ensure both images exist
        if (!req.files || !req.files.document_front_image || !req.files.document_back_image) {
            return res.status(400).json({ success: false, message: "Both front and back images are required" });
        }

        const id_card_number = req.body.id_card_number || '';
        const encrkey = process.env.ENCRYPTION_KEY;
        //const quote_id = "QUA370";
        var quote_id =  req.quote_id ? req.quote_id : req.body.quote_id;
        logger.info("quote_id--"+quote_id);
        logger.info("req.body."+req.body.quote_id);
        logger.info("reqquote"+req.quote_id);

        const nationalCardFolder = `${quote_id}/id/`;

        // Empty the folder before uploading new files
        await emptyS3Folder(nationalCardFolder);

        // Prepare file names
        const frontFile = req.files.document_front_image[0];
        const backFile = req.files.document_back_image[0];
        if (!frontFile || !backFile) {
            return res.status(400).json({ success: false, message: "Both front and back images are required" });
        }

        
        const frontFileName = `${nationalCardFolder}${path.basename(frontFile.originalname)}`;
        const backFileName = `${nationalCardFolder}${path.basename(backFile.originalname)}`;


        // Upload files concurrently
        await Promise.all([
            s3.send(new PutObjectCommand({
                Bucket: process.env.AWS_S3_BUCKET_NAME,
                Key: frontFileName,
                Body: Buffer.from(frontFile.buffer),
                ContentType: frontFile.mimetype
            })),
            s3.send(new PutObjectCommand({
                Bucket: process.env.AWS_S3_BUCKET_NAME,
                Key: backFileName,
                Body: Buffer.from(backFile.buffer),
                ContentType: backFile.mimetype
            }))
        ]);
            console.log("📤 Uploading front file:", {
            Key: frontFileName,
            ContentType: frontFile.mimetype,
            Size: frontFile.buffer.length
        });

        console.log("📤 Uploading back file:", {
            Key: backFileName,
            ContentType: backFile.mimetype,
            Size: backFile.buffer.length
        });
        // Construct S3 file URLs
        const frontFileUrl = `https://${process.env.AWS_S3_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/${frontFileName}`;
        const backFileUrl = `https://${process.env.AWS_S3_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/${backFileName}`;
        logger.info("frontFileUrl"+frontFileUrl);
        logger.info("backFileUrl"+backFileUrl);

        // Update database
        try {
            logger.info("Update UpdateIDCardSelfieURLDetails Calling");
            await sequelize.query(
                'CALL UpdateIDCardSelfieURLDetails(:quote_id, :type, :front_url, :back_url, :national_card_number, :selfie_url, :encrkey)',
                {
                    replacements: {
                        quote_id:quote_id,
                        type: "id_card",
                        front_url: frontFileUrl,
                        back_url: backFileUrl,
                        national_card_number: id_card_number,
                        selfie_url: '',
                        encrkey:encrkey
                    },
                    raw: true,
                    type: Sequelize.QueryTypes.SELECT
                }
            ).then(async function (response) {
                    response=Object.values(response[0]);
                    logger.info("updateID caard"+response[0]);

                    logger.info("DB Dcoument Upload Response:"+ response[0].Message);
            }).catch(err => {
                    console.log("Erroro message", err.message);
                    logger.error(
                        "Error inside UpdateIDCardSelfieURLDetails method. Error:"+
                        err.message
                    );
            });
        } catch (err) {
            logger.error("❌ Error updating ID card details:", err.message);
            return res.status(500).json({
                success: false,
                message: `Database update failed: ${err.message}`
            });
        }

        res.json({
            isSuccess: true,
            message: "Document images uploaded successfully!"
        });

    } catch (error) {
        console.error("❌ Upload Error:", error);
        res.status(500).json({ success: false, message: "File upload failed", error: error.message });
    }
};

/**
 * Handles uploading a selfie image
 */
exports.selfieImageUpload = async (req, res) => {
    try {
        console.log("🔍 Checking req.body:", req.body);
        console.log("🔍 Checking req.file:", req.file);

        if (!req.file) {
            return res.status(400).json({ success: false, message: "No selfie image uploaded" });
        }

        const selfieImage = req.file;
        const encrkey = process.env.ENCRYPTION_KEY;
        //const quote_id = "QUA370";

       var quote_id =  req.quote_id ? req.quote_id : req.body.quote_id;
        logger.info("selfie upload quote_id--"+quote_id);

        const selfieFolder = `${quote_id}/selfie/`;

        // Empty the folder before uploading new selfie
        await emptyS3Folder(selfieFolder);

        const selfieImageName = `${selfieFolder}${path.basename(selfieImage.originalname)}`;

        // Upload selfie image
        await s3.send(new PutObjectCommand({
            Bucket: process.env.AWS_S3_BUCKET_NAME,
            Key: selfieImageName,
            Body: selfieImage.buffer,
            ContentType: selfieImage.mimetype
        }));

        // Construct S3 URL
        const selfieFileUrl = `https://${process.env.AWS_S3_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/${selfieImageName}`;
        logger.info("selfieFileUrl"+selfieFileUrl);
        // Update database
        try {
            logger.info("Update UpdateIDCardSelfieURLDetails Calling");

            const response = await sequelize.query(
                'CALL UpdateIDCardSelfieURLDetails(:quote_id, :type, :front_url, :back_url, :national_card_number, :selfie_url, :encrkey)',
                {
                    replacements: {
                        quote_id,
                        type: "selfie",
                        front_url: '',
                        back_url: '',
                        national_card_number: '',
                        selfie_url: selfieFileUrl,
                        encrkey
                    },
                    raw: true,
                    type: Sequelize.QueryTypes.SELECT
                }
            );

            logger.info("Selfie Upload Response:"+ response);
        } catch (err) {
            logger.error("❌ Error updating selfie image details:", err.message);
            return res.status(500).json({
                success: false,
                message: `Database update failed: ${err.message}`
            });
        }

        res.json({
            isSuccess: true,
            message: "Selfie image uploaded successfully!"
        });

    } catch (error) {
        console.error("❌ Upload Error:", error);
        res.status(500).json({ success: false, message: "Selfie image upload failed", error: error.message });
    }
};


exports.getSelfieURL = async (req, res) => {
    try {
        const quote_id = req.body.quote_id || req.quote_id;
        if (!quote_id) {
            return res.status(400).json({ success: false, message: "Quote ID is required" });
        }

        // ✅ Fetch selfie_image_path from the database
        const [dresponse] = await sequelize.query(
            "SELECT selfie_image_path FROM tbl_Quotations WHERE quote_id = :quote_id",
            { replacements: { quote_id }, type: sequelize.QueryTypes.SELECT }
        );

        if (!dresponse || !dresponse.selfie_image_path) {
            return res.status(404).json({ success: false, message: "Selfie image not found" });
        }

        console.log("Database response:", dresponse.selfie_image_path);

        // ✅ Extract S3 key from URL
        const fileKey = dresponse.selfie_image_path.split(".com/")[1];
        if (!fileKey) {
            return res.status(400).json({ success: false, message: "Invalid S3 file path" });
        }

        console.log("Extracted file key:", fileKey);

        // ✅ Get Signed URL
        const resultURL = await getS3Url(fileKey);
        console.log("Generated Signed URL:", resultURL);

        // ✅ Send response
        res.json({ success: true, url: resultURL });

        logger.info(`✅ getSelfieURL retrieved successfully for quote_id: ${quote_id}`);
    } catch (error) {
        logger.error("Error in getSelfieURL:", error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
};

// ✅ Function to generate S3 Signed URL
const getS3Url = async (fileKey) => {
    try {
        if (!fileKey) {
            throw new Error("File key is required");
        }

        const command = new GetObjectCommand({
            Bucket: process.env.AWS_S3_BUCKET_NAME,
            Key: fileKey,
        });

        return await getSignedUrl(s3, command, { expiresIn: 1500 }); // URL expires in 5 minutes
    } catch (error) {
        console.error("Error generating signed URL:", error);
        throw error;
    }
};

exports.deleteSelfieImage = async (req, res) => {
    try {

         const quote_id = req.body.quote_id || req.quote_id;
      //  var quote_id = "QUA1090";
        logger.info("quote_id --"+quote_id);
         const selfieFolder = `${quote_id}/selfie/`;

        // Empty the folder before uploading new selfie
        await emptyS3Folder(selfieFolder);
        await sequelize.query( `UPDATE tbl_Quotations SET selfie_image_path = "" WHERE quote_id = :quote_id`, { replacements: { quote_id } });
         res.json({
            isSuccess: true,
            message: "Selfie image deleted successfully!"
        });

    } catch (error) {
        console.error("❌ Upload Error:", error);
        res.status(500).json({ success: false, message: "Delete Selfie image upload failed", error: error.message });
    }
};

