const mongoose=require('mongoose');
var Contactus = mongoose.model('Contactus',{
    name: {type:String},
    email: {type:String},
    request: {type:String}
});
module.exports={Contactus}; 