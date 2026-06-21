const { S3Client } = require('@aws-sdk/client-s3');
require('dotenv').config();

// ✅ Ensure all required environment variables are set
if (!process.env.AWS_ACCESS_KEY_ID || !process.env.AWS_SECRET_ACCESS_KEY || !process.env.AWS_REGION || !process.env.AWS_S3_BUCKET_NAME) {
    console.warn("⚠️ AWS S3 Configuration Warning: Missing environment variables. S3 features will be disabled.");
}

// ✅ Configure AWS SDK v3 S3Client
const s3 = new S3Client({
    region: process.env.AWS_REGION || 'ap-south-1',
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID || 'dummy',
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || 'dummy'
    }
});

module.exports = s3; // Export the S3 client
