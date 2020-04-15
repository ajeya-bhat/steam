const express =require('express');
var router= express.Router();
var ObjectId=require('mongoose').Types.ObjectId;
var { Cart }=require("../models/cart");
var { Contactus }=require("../models/contactus");
var { Detail } = require("../models/detail");
router.put('/carts',(req,res)=>{
    
    Cart.findOne({name:req.body.name},(err,doc)=>
    {
        if(err){console.log("ERR");}
        if(!doc){
            var c=new Cart({
                name: req.body.name,
                url:req.body.url,
                price:req.body.price
            });
            c.save((err,doc)=>{
                console.log(doc);
                console.log(c);
                if(!err) {res.send(doc);}
        
                else{console.log("ERR")}
            });
        }
    });
    
});

router.post('/detail',(req,res)=>{
    
    Detail.findOne({name:req.body.name,email:req.body.email,games:req.body.games},(err,doc)=>
    {
        if(err){console.log("ERR");}
        if(!doc){
            var c=new Detail({
                name: req.body.name,
                email:req.body.url,
                totalprice:req.body.totalprice,
                games:req.body.games
            });
            c.save((err,doc)=>{
                console.log(doc);
                console.log(c);
                if(!err) {res.send(doc);}
        
                else{console.log("ERR")}
            });
        }
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

router.post('/detail',(req,res)=>{
    var c=new Contactus({
        name: req.body.name,
        email:req.body.email,
        games:req.body.games,
        totalprice:req.body.totalprice
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

router.get('/detail',(req,res)=>{
    Detail.find((err,doc)=>{
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
router.delete('/carts',(req,res)=>{
   
    Cart.deleteMany({}, (err,doc) => {
        if(err){console.log("NO DEL");}
        else{
            res.send(doc);
        }
    });
});
router.get('/listall',(req,res)=>{
    Main.find((err,doc)=>{
        if(!err) {console.log("balls");res.send(doc);}
        else{console.log("ERR")}
    });
});
module.exports=router;