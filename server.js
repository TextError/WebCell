const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
require('dotenv').config();
const db = require('./config/Keys').MONGO_DB;

const user = require('./routes/api/user');


const app = express();


// Body-Parser Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());


// Connect to DB
mongoose.connect(db, { useNewUrlParser: true, useFindAndModify: false })
.then(() => console.log('MongoDB Connected'))
.catch(err => console.log(err));


// Server static assets if in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));
  
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  });
}

// Routes
app.use('/api/user', user);


// Port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));