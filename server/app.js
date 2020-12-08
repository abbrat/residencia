const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const user_router = require('./Api/routes/user_router'); /// router handeling login and register
const booking_router = require('./Api/routes/booking_router'); // router handing bookins ans modifying bookings
const hotel_router = require('./Api/routes/hotel_router'); // router handeling hotel option details
const query = require('./Api/routes/Query_router');

// mongodb+srv://order:order@order-rngvt.mongodb.net/test?retryWrites=true&w=majority
//mongodb+srv://admin:admin@cluster0-k3qmq.mongodb.net/test?retryWrites=true&w=majority
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.connect(
  'mongodb+srv://order:order@order-rngvt.mongodb.net/test?retryWrites=true&w=majority',
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log('db connected +');
  }
);

// logger
app.use(morgan('dev'));
app.use('/upload', express.static('upload'));
// parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ extended: false }));
//// cors access
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', '*');
  next();
});

//// routes
app.use('/user', user_router);
app.use('/book', booking_router);
app.use('/hotel', hotel_router);
app.use('/query', query);

/// error control
app.use((req, res, next) => {
  const err = new Error('trying to acces an unhandeled route');
  err.status = 404;
  next(err);
});
app.use((error, req, res, next) => {
  res.status(error.status || 500).json({
    error: {
      message: error.message,
      kk: 'vfvdfbfbfb'
    }
  });
});

module.exports = app;
