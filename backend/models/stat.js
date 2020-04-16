const mongoose=require('mongoose');
var Stat = mongoose.model('Stat',{
    p1: {type:String},
    p2: {type:String}
    
});
module.exports={Stat}; 