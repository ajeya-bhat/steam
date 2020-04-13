const mongoose=require("mongoose");
mongoose.connect('mongodb://localhost:27017/steam',(err)=>{
    if(err){
        console.log("MONGODB ERROR");
    }
});
module.exports=mongoose;