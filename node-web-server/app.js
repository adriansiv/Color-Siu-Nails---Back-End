const path = require('path');
const express = require('express');
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

// const whiteList = ['http://localhost:3000'];

// Connecting to db
const user = process.env.MONGO_USER;
const passwrod = process.env.MONGO_PASSWORD;
const cluster = process.env.MONGO_CLUSTER;
const db = process.env.MONGO_DB;

mongoose.connect(`mongodb+srv://${user}:${passwrod}@${cluster}/${db}`)
.then(() => console.log('DB Connected'))
.catch(err => console.log(err));

// importing routes
const indexRouters = require('./routes/index');
const usersRouter = require('./routes/users');

// Setting
app.set('port', process.env.PORT || 4000);



// Middelwares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));

// Routes
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  next();
}); 
app.use('/', indexRouters);


app.listen(app.get('port'), () => {
  console.log(`Server is running on port ${app.get('port')}`);
});


