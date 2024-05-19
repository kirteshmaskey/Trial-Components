const express = require("express");
const mongoose = require("mongoose");
const app = express();
const csvRoutes = require("./routes/csvRoutes");

app.use(express.json());
const port = 8000;
const db = "mongodb://127.0.0.1:27017/csvtodb";

app.use("/api/upload-file/", csvRoutes);

mongoose
  .connect(db)
  .then(() => console.log("Connected to database"))
  .catch((err) => {
    console.log("Cannot connect to database");
    console.log(err.message);
  });

app.listen(port, () => {
  console.log(`Server running on port ::: ${port}`);
});
