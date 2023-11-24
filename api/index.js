const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const UserModel = require('./models/User');
require('dotenv').config(); 
const bcrypt = require ('bcrypt');

app.use(express.json());
const bcryptSalt = bcrypt.genSalt(10)
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

app.post('/register',async (req, res) => {
  const { name, email, password } = req.body;
  const UserModel =  await UserModel.create({ 
    name, 
    email, 
    password
  })
  res.json({ name, email, password });
})

app.listen(4000, () => {
  console.log('Server is running on port 4000');
});
