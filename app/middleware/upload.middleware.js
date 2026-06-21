const multer = require('multer');

// Allowed file types
const allowedImageTypes = ['image/jpeg', 'image/png'];
const allowedDocumentTypes = [...allowedImageTypes, 'application/pdf']; // Includes JPG, PNG, PDF

// File size limit (2MB)
const maxFileSize = 2 * 1024 * 1024; // 2MB

// Storage settings (memory storage)
const storage = multer.memoryStorage();

// Filter for document files (JPG, PNG, PDF)
const documentFileFilter = (req, file, cb) => {
    if (allowedDocumentTypes.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(new Error('Only JPG, PNG, and PDF files are allowed for documents.'));
    }
};

// Filter for selfie images (JPG, PNG)
const selfieFileFilter = (req, file, cb) => {
    if (allowedImageTypes.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(new Error('Only JPG and PNG files are allowed for selfie images.'));
    }
};

// Document upload (front and back)
const documentUpload = multer({ 
    storage, 
    limits: { fileSize: maxFileSize }, 
    fileFilter: documentFileFilter 
}).fields([
    { name: 'document_front_image', maxCount: 1 },
    { name: 'document_back_image', maxCount: 1 }
]);

// Selfie upload
const selfieUpload = multer({ 
    storage, 
    limits: { fileSize: maxFileSize }, 
    fileFilter: selfieFileFilter 
}).single('selfie_image');

module.exports = { documentUpload, selfieUpload };
