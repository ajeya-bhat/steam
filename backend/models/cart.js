const mongoose=require('mongoose');
var Cart = mongoose.model('Cart',{
    name: {type:String},
    url: {type:String},
    price: {type:Number}
});
module.exports={Cart}; 