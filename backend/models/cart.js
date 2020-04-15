const mongoose=require('mongoose');
var Cart = mongoose.model('Cart',{
    name: {type:String, unique:true,dropDups:true},
    url: {type:String},
    price: {type:Number}
});
module.exports={Cart}; 