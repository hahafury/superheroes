const multer = require('multer');
const path = require('path');
const { staticPath } = require('./../config/config');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(staticPath + '/images'));
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '_' + file.originalname);
  },
});

const MIME_REGEXP = /^image\/(jpeg|png|gif)/;

function fileFilter(req, file, cb) {
  cb(null, MIME_REGEXP.test(file.mimetype));
}

const imageUpload = multer({ storage: storage, fileFilter: fileFilter });

module.exports = imageUpload;
