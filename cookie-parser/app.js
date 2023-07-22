const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
 
app.use(cookieParser());

const port = 8000;

app.get('/', (req, res) => {
  let cookieVal = req.cookies.username;
  let html;
   
  if (cookieVal) {
      html = `Hi ${cookieVal} <br><a href="/delete-cookie">Delete Cookie</a>`;
  } else {
      html = `<a href="/set-cookie">Set Cookie</a><br>
      <a href="/delete-cookie">Delete Cookie</a><br>`;
  }
  res.send(html);
});


app.get('/set-cookie', (req, res) => {
  res.cookie('username', 'Hello Kirtesh', {
    maxAge: 1000 * 60, // 1 min
    httpOnly: true, // http only, prevents JavaScript cookie access
    secure: true
  });
  // REDIRECT OT HOME
  res.redirect('/');
});

app.get('/delete-cookie', (req, res) => {
  res.clearCookie('username');
  // REDIRECT OT HOME
  res.redirect('/');
});


app.listen(port, () => {
  console.log(`Server started on port ::: ${port}`);
});