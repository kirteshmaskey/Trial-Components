const fs = require("fs");
const path = require("path");
const csv = require("fast-csv");
const User = require("../models/user");

const csvToDB = async (req, res) => {
  console.log(req.body);
  const totalRecords = [];
  try {
    console.log(
      path.join(__dirname, "../", "/public/csv/" + req.file.filename)
    );
    fs.createReadStream(
      path.join(__dirname, "../", "/public/csv/" + req.file.filename)
    )
      .pipe(csv.parse({ headers: true }))
      .on("error", (error) => console.error(error))
      .on("data", (row) => totalRecords.push(row))
      .on("end", async (rowCount) => {
        try {
          const users = await User.insertMany(totalRecords);
          res.send({ status: 200, user: users });
        } catch (err) {
          res.send({ status: 401, error: err.message });
        }
      });
    try {
      fs.unlink(path.join(__dirname, "../", "/public/csv/" + req.file.filename), (err) => {
        if (err) {
          console.error(`Error: ${err}`);
        } else {
          console.log("File was deleted successfully");
        }
      });
    } catch (err) {
      console.log(err.message);
    }
  } catch (error) {
    res.send({ status: 402, error: error.message });
  }
};

module.exports = csvToDB;
