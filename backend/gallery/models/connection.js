const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/steam",{ useNewUrlParser: true ,useUnifiedTopology:true},(error)=>{
     if(!error)
     {
         console.log("success");
     }
     else
     {
         console.log("error connecting to db")
     }
});
const steam = require("./base.model");