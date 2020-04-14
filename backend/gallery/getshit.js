const connection = require("./models/connection");
const mongoose = require("mongoose");
const express =require("express");
const app = express();
const expressHandlebars = require("express-handlebars");
const bodyparser = require("body-parser");
const { main } = mongoose.model("main");


 app.use(bodyparser.urlencoded({extended:true}));

 app.get("/listall", (req, res)=>{
     main.find((err,docs)=>{
     if(!err)
     {
        console.log(docs);
        res.send(docs);

     }    
     });
     
 });
 app.listen("3000", ()=>{
     console.log("server started");
 });

