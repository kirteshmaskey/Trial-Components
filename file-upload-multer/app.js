require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const multer = require('multer');
const Image = require('./modal/imageSchema');

const app = express();

app.use(express.json());
app.use(cors());

const port = process.env.PORT || 8000;
const DATABASE = process.env.DATABASE;

mongoose.connect(DATABASE)
  .then(()=> {
    console.log("Connected to DATABASE");
  })
  .catch((err)=> {
    console.log(`Error connecting to DATABASE :: ${err}`);
  })





  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'file-upload/src/images/');
      // cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
      const uniqueName = Date.now();
      cb(null, uniqueName + "-" + file.originalname);
    },
  })
  
  const upload = multer({ storage: storage })


app.post('/upload-image', upload.single("image"), async (req, res)=> {
  const imageName = req.file.filename;
  try {
    await Image.create({ imagePath: imageName });
    res.status(201).json({ status: 201 });
  } catch (error) {
    res.status(500).json({ status: 500, error: error });
  }
});

app.get('/get-images', async (req, res)=> {
  try {
    const data = await Image.find({});
    res.status(201).json({ data: data });
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

app.listen(port, ()=> {
  console.log(`Server running on port ::: ${port}`);
});