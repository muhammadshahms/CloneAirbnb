const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const UserModel = require('./models/User');
require('dotenv').config();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
var cookieParser = require('cookie-parser')

const jwtSecret = 'secret';
app.use(express.json());
app.use(cookieParser());
const bcryptSalt = bcrypt.genSaltSync(10)
// ipaddress: 103.70.86.89/32
// muhammadshah4589
// LOS2r0cw3EPhr1fv


app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));

mongoose.connect(process.env.MONGO_URI)

app.get('/test', (req, res) => {
  res.json('test');
});

app.post('/register', async (req, res) => {
  const { name, email, password } = req.body;
  const UserDoc = await UserModel.create({
    name,
    email,
    password: bcrypt.hashSync(password, bcryptSalt)
  })
  res.json(UserDoc);
});

app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const UserDoc = await UserModel.findOne({ email });
  if (UserDoc) {
    const passOk = bcrypt.compareSync(password, UserDoc.password)
    if (passOk) {
      jwt.sign({
        email: UserDoc.email,
        id: UserDoc._id,
      },
        jwtSecret, {}, (err, token) => {
          if (err) throw err;
          res.cookie('token', token).json(UserDoc);
        })

    } else {
      res.status(422).json("wrong password")
    }
  }
  else {
    res.json("not found")
  }
})


app.get('/profile', async (req, res) => {
  const { token } = req.cookies;
  if (token) {
    jwt.verify(token, jwtSecret, {}, async (err, userData) => {
      if (err) throw err;
      const { name, email, _id } = await UserModel.findById(userData.id)
      res.json({ name, email, _id });
    })
  }
  else {
    res.json(null)
  }
})

app.listen(4000, () => {
  console.log('Server is running on port 4000');
});