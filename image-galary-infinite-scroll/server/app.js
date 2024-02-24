const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const fs = require('fs');

const app = express();
app.use(cors())

const port = 5000;

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/images', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB...', err));

// Define your schema
const UserSchema = new mongoose.Schema({
  imageName: String
});

const User = mongoose.model('User', UserSchema);

const userData = [
  {userId: 1, id: 1, title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit', body: 'quia et suscipit\nsuscipit recusandae consequuntur'},
  {userId: 1, id: 2, title: 'qui est esse', body: 'est rerum tempore vitae\nsequi sint nihil reprehend'},
  {userId: 1, id: 3, title: 'ea molestias quasi exercitationem repellat qui ipsa sit aut', body: 'et iusto sed quo iure\nvoluptatem occaecati omnis e'},
  {userId: 1, id: 4, title: 'eum et est occaecati', body: 'ullam et saepe reiciendis voluptatem adipisci\nsit'},
  {userId: 1, id: 5, title: 'nesciunt quas odio', body: 'repudiandae veniam quaerat sunt sed\nalias aut fugi'},
  {userId: 1, id: 6, title: 'dolorem eum magni eos aperiam quia', body: 'ut aspernatur corporis harum nihil quis provident'},
  {userId: 1, id: 7, title: 'magnam facilis autem', body: 'dolore placeat quibusdam ea quo vitae\nmagni quis e'},
  {userId: 1, id: 8, title: 'dolorem dolore est ipsam', body: 'dignissimos aperiam dolorem qui eum\nfacilis quibus'},
  {userId: 1, id: 9, title: 'nesciunt iure omnis dolorem tempora et accusantium', body: 'consectetur animi nesciunt iure dolore\nenim quia a'},
];

app.get('/api/data', async (req, res) => {
  const { page = 0 } = req.query;
  console.log("requesting page: ", page)
  discard = page * 6;
  const users = await User.find().skip(discard).limit(6);
  
  const data = users.map(user => {
    const image = fs.readFileSync(`images/${user.imageName}`);
    return {
      image: image.toString('base64'),
      imageName: user.imageName
    };
  });
  
  for(const el of data) {
    console.log(el.imageName)
  }

  res.json(data);
});

app.get('/data', async (req, res) => {
  res.send(userData);
})

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
