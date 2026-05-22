const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("./cloudinary");
const path = require("path");

function uploadMiddleware(folderName) {
  const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: async (req, file) => {
      const fileExtension = path.extname(file.originalname).substring(1);

      return {
        folder: folderName,
        resource_type: "raw",
        format: fileExtension,
         public_id: file.fieldname + "-" + Date.now(),
      };
    },
  });

  return multer({
    storage: storage,
    limits: {
      fileSize: 5 * 1024 * 1024, 
    },
  });
}

module.exports = uploadMiddleware;
