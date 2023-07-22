const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();

app.use(cors());

const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
  const ip = req.ip;
  res.sendFile(path.join(__dirname + '/index.html'));
  // res.send(ip);
})


app.listen(port, () => {
  console.log(`Server running on port ::: ${port}`);
})
