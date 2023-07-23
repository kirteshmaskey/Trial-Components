const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema(
  {
    imagePath: String,
  }
);

const Image = mongoose.model("Images", imageSchema);
module.exports = Image;