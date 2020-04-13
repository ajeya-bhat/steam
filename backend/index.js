const express=require('express');
const bodyParser=require('body-parser'); 

const { mongoose }=require("./db.js");
var cartController= require("./controllers/cartController");

var app=express();
app.use(bodyParser.json());
app.listen(3000,()=> console.log("Server start")); 