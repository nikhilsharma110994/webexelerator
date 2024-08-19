const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 3000;

// MongoDB connection
const mongoURI = process.env.MONGO_URI || 'mongodb+srv://nikhilsharma110994:nikhil@training-cluster.vd7tsre.mongodb.net/?retryWrites=true&w=majority&appName=training-cluster';
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// Basic route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Start server
app.listen(port, () => {
  console.log(`App running on http://localhost:${port}`);
});
