const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema(
  {
    imageBase64: String,
  }
);

const Image = mongoose.model("UploadedImages", imageSchema);

module.exports = Image; 