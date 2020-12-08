const express =require('express');
const router=express.Router();
const booking=require('../models/booking_model');
const mongoose=require('mongoose');
const auth=require('../middleware/check-auth')
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'globetrotterschitkara@gmail.com',
    pass: '1026@globetrotterHotel'
  }
});
/// get the orders made by a perticular user
router.get('/mybooking/:userid',auth,(req,res,next)=>{
    const  user=req.params.userid;
    booking.find({user_id:user}).exec().then(result=>{
        res.status(200).json(result);
    }).catch(err=>{
        res.status(500).json(err);
    })
})

// make the orders
router.post('/', auth,(req,res,next)=>{
   const book=new booking({
    _id:    new mongoose.Types.ObjectId(),
    email:  req.body.email,
    hotel:  req.body.hotel,
    location:req.body.location,
    checkIn:req.body.checkIn,
    checkOut:req.body.checkOut,
    Amount:req.body.Amount
    });
    console.log(req.body.checkIn)
    var mailOptions = {
        from: 'Residenciachitkara@gmail.com',
        to: req.body.email,
        subject: 'successfully Booked a room at '+req.body.hotel+' using Residencia platform',
        text: `Dear Customer,

        Thank you for being our valued customers. We are grateful for the pleasure of serving you and meeting your printing needs.
        
        We wish you a beautiful Thanksgiving and a joyous year's end.
        
        Warm wishes,`
      };
    book.save()
    .then(result=>{
        res.status(200).json(result);
        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
              console.log(error);
            } else {
              console.log('Email sent: ' + info.response);
            }
          });
    })
    .catch(err=>{
        res.status(500).json({error:err})
    })
})

/// cancel or delete order
router.delete('/del_order/:orderid',auth,(req,res,next)=>{
    const id=req.params.orderid;
    booking.deleteOne({_id:id}).exec().then(result=>{
        console.log(result);
        res.status(200).json(result);
    }).catch(err=>{
        console.log(err);
        res.status(500).json({
            error:err
        })
    })
})


module.exports=router;




/*


mongodb+srv://order:order@order-rngvt.mongodb.net/test?retryWrites=true&w=majority


*/