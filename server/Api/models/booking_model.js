const mongoose=require('mongoose');
const bookingSchema=mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    email:{type:String,
        required:true,
       match:/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    },
    hotel: {type:String,required:true},
    location:{type:String,required:true},
    checkIn:{type:String,
        required:true,
      match:/([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/
    },
    checkOut:{type:String,
        required:true,
       match:/([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/
    },
    Amount:{type:String,required:true}
});


module.exports=mongoose.model('booking',bookingSchema);