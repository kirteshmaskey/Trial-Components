require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Image = require('./modal/uploadImageSchema');


const app = express();

app.use(cors());
app.use(express.json());

const port = process.env.PORT;
const database = process.env.DATABASE;

mongoose.connect(database)
  .then(() => {
    console.log("Connected to DATABASE");
  })
  .catch((err) => {
    console.log("Error Connecting to DATABASE ::: ", err);
  });


app.post('/upload-image', async(req, res) => {
  // console.log(req.body);

  const { image } = req.body;
  try {
    Image.create({ imageBase64: image });

    res.status(200).json({ status: 200, message: "Upload Complete" });
  }catch(err) {
    res.status(400).json({ status: 400, error: err });
  }
});

app.get('/get-images', async(req, res) => {
  try {
    const images = await Image.find({});
    res.status(200).json({ status: 200 , images: images});
  }catch {
    res.status(500).json({ status: 500, error: "Cannot get images" });
  }
});


app.listen(port, ()=>{
  console.log(`Server started on port ::: ${port}`);
});