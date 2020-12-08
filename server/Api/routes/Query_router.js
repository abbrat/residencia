const express =require('express');
const router=express.Router();
const query=require('../models/query_model');
const mongoose=require('mongoose');
// make the orders
router.post('/',(req,res,next)=>{
     const query1= new query({
         Name:req.body.name,
         phone:req.body.phone,
         email:req.body.email,
         message: req.body.message
     })
    query1.save()
    .then(result=>{
        res.status(200).json(result);
    })
    .catch(err=>{
        res.status(500).json({error:err})
    })
})



module.exports=router;




/*


mongodb+srv://order:order@order-rngvt.mongodb.net/test?retryWrites=true&w=majority


*/