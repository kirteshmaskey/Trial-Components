const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
app.use(cors())

const imagePaths = [
  // "./images/1708166900243.jpg",
  "./IMAGE_PATH.jpg",
];

app.get('/', (req, res) => {
  res.writeHead(200, { 'Content-Type': 'image/jpeg' }); // Set the appropriate content type

  // Function to send multiple files
  const sendMultipleFiles = (index) => {
    if (index >= imagePaths.length) {
      res.end();
      return;
    }

    const imagePath = imagePaths[index];
    const imageStream = fs.createReadStream(imagePath);

    imageStream.on('data', (chunk) => {
      res.write(chunk);
    });

    imageStream.on('end', () => {
      // Add some separator between images
      res.write('newline');
      // Send the next file
      sendMultipleFiles(index + 1);
    });

    imageStream.on('error', (err) => {
      console.error('Error reading file:', err);
      res.status(500).send('Server Error');
    });
  };

  // Start sending the first file
  sendMultipleFiles(0);
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
