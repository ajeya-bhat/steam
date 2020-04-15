const mongoose=require('mongoose');
var Detail = mongoose.model('Detail',{
    name: {type:String},
    email: {type:String},
    games:{type:String},
    totalprice: {type:Number}
});
module.exports={Detail}; 