const express =require('express');
const router=express.Router();
const hotel=require('../models/hotel_model');
const mongoose=require('mongoose');
const multer  = require('multer')
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './upload/')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, uniqueSuffix+ file.originalname)
    }
  })
const fileFilter=(req,file,cb)=>{
    if(file.mimetype=== 'image/jpeg'|| file.mimetype=== 'image/png'){
        cb(null,true);
    }else{
        cb(null,false);
    } 
}
const upload = multer({storage: storage , limits:{
    fileSize:1024*1024*3
}
,fileFilter:fileFilter})

router.get('/:location',(req,res,next)=>{
    const location=req.params.location;
    hotel.find({location:location}).exec().then(result=>{
        res.status(200).json(result);
    }).catch(err=>{
        res.status(500).json(err);
    })
})

router.post('/',upload.single('avatar'),(req,res,next)=>{
//router.post('/',(req,res,next)=>{
    //console.log(req.file);
   const place=new hotel({
        _id:new mongoose.Types.ObjectId(),
        hotelName: req.body.hotel,
    Address: req.body.address,
    location:req.body.location,
    price:req.body.price,
    contact:req.body.contact,
    rooms:req.body.rooms,
    img_url:req.file.path
    });
   place.save().then(result=>{
        //res.status(200).json(result);
        //console.log("here")
        res.status(200).json(result)
    }).catch(err=>{
        res.status(500).json(err);
    })
})



module.exports=router;