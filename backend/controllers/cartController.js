const express =require('express');
var router= express.Router();
var ObjectId=require('mongoose').Types.ObjectId;
var { Cart }=require("../models/cart");

router.post('/',(req,res)=>{
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

router.get('/',(req,res)=>{
    Cart.find((err,doc)=>{
        if(!err) {res.send(doc);}

        else{console.log("ERR")}
    });
});

router.delete('/:id',(req,res)=>{
    if(!ObjectId.isValid(req.param.id))
        return res.status(400).send(`NO RECORD : ${req.params.id}`);
    Cart.findByIdAndRemove(req.params.id,(err,doc)=>{
        if(!err){res.send(doc);}
        else{console.log("NO DEL");}
    });
});
module.exports=router;