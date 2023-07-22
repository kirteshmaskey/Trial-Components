require("dotenv").config();
const nodemailer = require('nodemailer');

const html = `
  <h1>Hello there,</h1>
  <p>sending mail using nodemailer</p>
`;

const emails = ['kirteshmaske123@gmail.com', 'kirteshmaskey@gmail.com', '20010027@ycce.in'];
// const emails = ['kirteshmaske123@gmail.com'];

async function main() {
  const transporter = nodemailer.createTransport({
    service:"gmail",
    auth:{
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    }
  });
  const status = await transporter.sendMail({
    from: 'kkmkittu36@gmail.com',
    to: emails,
    subject: "Learning mailing using node and nodemailer",
    html: html,
    attachments: [{
      filename: 'ImportantGitCommands.PNG',
      path: './GitCommands.PNG'
    }]
  })



  console.log("Message sent: " + status.messageId);
}

main().catch(e => console.log(e));