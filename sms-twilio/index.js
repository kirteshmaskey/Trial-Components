require("dotenv").config();

const express = require('express');
const twilio = require('twilio');
// const bodyParser = require('twilio');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));  


const port = 3000;

// Twilio credentials
const accountSid = process.env.ACCOUNT_SID;
const authToken = process.env.AUTH_TOKEN;

const client = twilio(accountSid, authToken);


app.post('/msg', (req, res) => {
  const { to, body } = req.body;
  // number must contain country code

  // const body = "Hello Kirtesh";
  // const to = "+919309947413";
  const from = process.env.FROM;
  client.messages
  .create({
    body: body, // body of the message
    to: to,     // Receivers mobile number
    from: from, // From a valid Twilio number
  })
  .then((message) => console.log(message.sid));

  console.log(body + " " + to);
});

app.post('/sms', (req, res)=>{
  const { fname, lname } = req.body;
  console.log(fname);
  console.log(lname);
})

app.get("/tp", (res, req) => {
  req.send("Hello Kirtesh");
})

app.listen(port, (req, res)=> {
  console.log(`Server running at port ::: ${port}`);
});