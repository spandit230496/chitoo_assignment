const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');


const url = 'mongodb+srv://atlasmongodb50:mongodbatlas@cluster0.bpkjrz8.mongodb.net/user_data';

app.use(cors());
app.use(express.json());

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("dbConnect");
  })
  .catch((e) => console.log(e));


const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
  score: Number
});

const userDataSchema = new mongoose.Schema({
  users: [userSchema],
});

const winnerDataSchema = new mongoose.Schema({
  winner: [userSchema],
});

const UserData = mongoose.model('users', userDataSchema);
const Winner = mongoose.model('winners', winnerDataSchema);

app.get('/create', function (req, res) {
  const users = [];
 
  for (let i = 0; i < 100 ; i++) {
    const names = ['Alice', 'Bob', 'Charlie', 'David', 'Emma', 'Frank', 'Grace', 'Henry', 'Ivy', 'Jack', 
    'Katherine', 'Leo', 'Mia', 'Noah', 'Olivia', 'Peter', 'Quinn', 'Ruby', 'Samuel', 'Tara']; // Array of 20 different names
    const user = {
      name:names[Math.floor(Math.random()*19)],
      age: Math.floor(Math.random()*100),
      score: Math.floor(Math.random()*100)
    };
    users.push(user);
  }

  const usersData = new UserData({
    users: users,
  });

  
  usersData.save()
    .then(() => {
      res.send('Users Created');
    })
    .catch((error) => {
      console.log(error);
      res.status(500).send('Error creating users');
    });
});

app.get('/',(req,res)=>{
  UserData.find({}).then((item)=>{
    console.log(item)
    res.send(item)
  })
})

app.get('/showwinner',(req,res)=>{
  Winner.find({}).then((item)=>{
    console.log(item[0].winner)
    res.send(item)
  })
})

app.post('/savewinner', (req, res) => {
  
  const winners = [];
  winners.push(req.body);
  const winnerData = new Winner({
    
    winner: winners

  
  })
  winnerData.save(winners)
    .then(() => {
      console.log("Saved");
      res.status(200);
    })
    .catch((error) => {
      console.error("Error saving winner:", error);
      res.status(500);
    });
// const documentId = '649b95da8873ff78f208ca5f';

// Winner.findById(documentId)
//   .then((document) => {
//     if (document) {
//       document.winner.push(req.body)
//       console.log('Updated Array', document);
//       res.send(document)
//       // Handle the found document
//     } else {
//       console.log('Document not found');
//       // Handle the case when document is not found
//     }
//   })
//   .catch((error) => {
//     console.error('Error finding document:', error);
//     // Handle the error
//   });

})


app.listen(5000, () => {
  console.log("connected");
})
