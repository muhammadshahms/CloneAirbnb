const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));

app.get('/test', (req, res) => {
  res.json('test');
});

app.listen(4000, () => {
  console.log('Server is running on port 4000');
});