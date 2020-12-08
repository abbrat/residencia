const express = require('express');
const router = express.Router();
const user = require('../models/user_model');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'globetrotterschitkara@gmail.com',
    pass: '1026@globetrotterHotel'
  }
});
///login route
router.post('/login', (req, res, next) => {
  user
    .find({ email: req.body.email })
    .exec()
    .then((user) => {
      if (user.length < 1) {
        return res.status(401).json({
          message: 'auth failed'
        });
      }
      bcrypt.compare(req.body.password, user[0].password, (err, result) => {
        if (err) {
          return res.status(401).json({
            error: 'auth failed'
          });
        }
        if (result) {
          const token = jwt.sign(
            {
              email: user[0].email,
              userId: user[0]._id
            },
            'secret',
            {
              expiresIn: '1h'
            }
          );
          return res.status(200).json({
            message: 'auth granted',
            token: token
          });
        }
        return res.status(401).json({
          message: 'auth failed'
        });
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
});

/// forgot password route
router.get('/forgot', (req, res, next) => {
  const email = req.body.email;
  user.findOne({ email: email }, (err, user) => {
    if (err) {
      console.log(err);
      return res.status(500).send();
    }
    if (!user) {
      return res.status(404).send({ message: 'no such user' });
    }
    return res.status(200).send(user);
  });
});

////register route
router.post('/register', (req, res, next) => {
  user
    .find({ email: req.body.email })
    .exec()
    .then((use) => {
      if (use.length >= 1) {
        return res.status(409).json({
          error: 'mail exist'
        });
      } else {
        bcrypt.hash(req.body.password, 10, (err, hash) => {
          if (err) {
            res.status(500).json({
              error: err
            });
          } else {
            const person = new user({
              _id: new mongoose.Types.ObjectId(),
              UserName: req.body.name,
              password: hash,
              email: req.body.email
            });
            var mailOptions = {
              from: 'Residenciachitkara@gmail.com',
              to: req.body.email,
              subject: 'successfully onboarded Residencia',
              text: `We welcome you to a new amazing experiance of hotel booking.`
            };
            person
              .save()
              .then((result) => {
                console.log(result);
                res.status(200).json({
                  message: 'new user Added sucessfully',
                  newUser: result
                });
                transporter.sendMail(mailOptions, function (error, info) {
                  if (error) {
                    console.log(error);
                  } else {
                    console.log('Email sent: ' + info.response);
                  }
                });
              })
              .catch((err) => {
                console.log(err);
                res.status(500).json({
                  error: err
                });
              });
          }
        });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
});

/// delete account route
router.get('/details/:token', (req, res, next) => {
  const t=req.params.token;
  
      res.status(200).json(JSON.parse(atob(t.split('.')[1]))); 
  
});

/// update password route
router.patch('/changePassword/:userId', (req, res, next) => {
  const id = req.params.userId;
  user
    .update({ _id: id }, { $set: { password: req.body.newpassword } })
    .exec()
    .then((result) => {
      console.log(result);
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(500).json({
        error: err
      });
    });
});

module.exports = router;
