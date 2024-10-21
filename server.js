const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const studentRoutes = require('./routes/studentRoutes');

dotenv.config();

const app = express();

// Middleware
app.use(express.json());

// Route for R1: Return User Info
app.get('/info', (req, res) => {
    res.json({
      data: {
        fullName: 'Tran Dai Viet',  // Replace with your real name
        studentCode: 'QE170219'    // Replace with your real student code
      }
    });
  });
  
// Routes
app.use(studentRoutes);

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Start the server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
