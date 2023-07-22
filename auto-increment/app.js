const express = require("express");
const app = express();
const mongoose = require("mongoose");

app.use(express.json());
const DATABASE = process.env.DATABASE;

// Connect to MongoDB
mongoose
  .connect(DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.error("Could not connect to MongoDB...", err));

// Student schema
const studentSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  uniqueId: {
    type: Number,
  },
});

// Counter Schema
const counterSchema = new mongoose.Schema({
  _id: {
    type: String,
  },
  uniqueId: {
    type: Number,
  },
});

// Create student model
const Student = new mongoose.model("Student", studentSchema);
//Create counter model
const Counter = new mongoose.model("Counter", counterSchema);

// POST request to add a new student
app.post("/savestudents", async (req, res) => {
  try {
    const counterData = await Counter.findOne({ _id: "counterId" });
    let counter;

    if (counterData === null) {
      counter = 1;
      const newCounter = new Counter({
        _id: "counterId",
        uniqueId: counter,
      });
      await newCounter.save();
    } else {
      counter = Number(counterData.uniqueId) + 1;
      const id = { _id: "counterId" };
      const updatedData = {
        $set: { uniqueId: counter },
      };
      await Counter.updateOne(id, updatedData);
    }

    const newStudent = new Student({
      name: req.body.name,
      email: req.body.email,
      uniqueId: counter,
    });

    const result = await newStudent.save();
    res.send(result);
  } catch (err) {
    console.error(err);
    res.status(500).send("An error occurred while saving the student");
  }
});

// GET request to retrieve all students
app.get("/students", async (req, res) => {
  const students = await Student.find();
  res.send(students);
});

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
