const multer = require("multer");
const path = require("path");

const fileTypes = [
  "image/png",
  "image/jpeg",
  "image/jpg",
  "image/webp"
];

const cleanFileName = filename => filename.replace(/[^a-zA-Z0-9_.-]/g, '_');

const storage = multer.diskStorage({
  destination: path.join(__dirname, "/../../public/upload/"),
  filename: (_, file, cb) => {
    if (fileTypes.includes(file.mimetype)) {
      const cleanedFileName = cleanFileName(file.originalname);
      cb(null, `${Date.now()}-${cleanedFileName}`);
    } else {
      cb(new Error("Invalid file type."));
    }
  },
});

module.exports = multer({ storage });
