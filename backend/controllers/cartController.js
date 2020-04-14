const express =require('express');
var router= express.Router();
var ObjectId=require('mongoose').Types.ObjectId;
var { Cart }=require("../models/cart");
var { Contactus }=require("../models/contactus");
var { Main } = require("../models/base.model");
router.post('/carts',(req,res)=>{
    var c=new Cart({
        name: req.body.name,
        url:req.body.url,
        price:req.body.price
    });
    c.save((err,doc)=>{
        if(!err) {res.send(doc);}

        else{console.log("ERR")}
    });
});

router.post('/contactus',(req,res)=>{
    var c=new Contactus({
        name: req.body.name,
        email:req.body.email,
        request:req.body.request
    });
    c.save((err,doc)=>{
        if(!err) {res.send(doc);}

        else{console.log("ERR")}
    });
});

router.get('/carts',(req,res)=>{
    Cart.find((err,doc)=>{
        if(!err) {res.send(doc);}
        else{console.log("ERR")}
    });
});

router.get('/contactus',(req,res)=>{
    Contactus.find((err,doc)=>{
        if(!err) {res.send(doc);}
        else{console.log("ERR")}
    });
});

router.delete('/carts/:id',(req,res)=>{
   
    Cart.findByIdAndRemove(req.params.id,(err,doc)=>{
        if(!err){res.send(doc);}
        else{console.log("NO DEL");}
    });
});
router.get('/listall',(req,res)=>{
    Main.find((err,doc)=>{
        if(!err) {console.log("balls");res.send(doc);}
        else{console.log("ERR")}
    });
});
module.exports=router;