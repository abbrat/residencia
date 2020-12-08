const mongoose=require('mongoose');
const hotelSchema=mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    hotelName: {type:String,required:true},
    Address: {type:String,required:true},
    location:{type:String,required:true},
    price:{type:String,required:true},
    contact:{type:String,required:true},
    rooms:{type:String,required:true},
    img_url:{type:String,required:true}      
});


module.exports=mongoose.model('hotel',hotelSchema);