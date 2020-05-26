const express =require('express');
const nodemailer =require('nodemailer');
var router= express.Router();
var ObjectId=require('mongoose').Types.ObjectId;
var { Cart }=require("../models/cart");
var { Contactus }=require("../models/contactus");
var { Detail } = require("../models/detail");
var { Stat } = require("../models/stat");

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
                if(!err) {res.send(doc);}
        
                else{console.log("ERR")}
            });
        }

    });
    
});


router.post('/stats',(req,res)=>{
	var flag=0;
    Stat.findOne({p1:req.body.p1,p2:req.body.p2},(err,doc)=>
    {
        if(err){console.log("ERR");}
        if(!doc){
            flag=1;
            var c=new Stat({
                p1: req.body.p1,
                p2:req.body.p2
                
            });
            c.save((err,doc)=>{
                if(!err) {res.send(doc);}
        
                else{console.log("ERR")}
            });
        }
        else{
        	res.send(["Entry already there"]);
        }
    });
    
});

router.post('/detail',(req,res)=>{
    Detail.findOne({name:req.body.name,email:req.body.email,games:req.body.games},(err,doc)=>
    {
        if(err){console.log("ERR");}
        if(!doc){
            let co=req.body;
            sendmail1(co);
            var c=new Detail({
                name: req.body.name,
                email:req.body.email,
                totalprice:req.body.totalprice,
                games:req.body.games
            });
            c.save((err,doc)=>{
                console.log(doc);
                if(!err) {res.send(doc);}
        
                else{console.log("ERR")}
            });
        }
    });
    
});


router.post('/contactus',(req,res)=>{
    let co=req.body;
    sendmail(co);
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

async function sendmail(user){
    let transporter=nodemailer.createTransport({
        host:"smtp.gmail.com",
        port:587,
        secure:false,
        auth:{
            user:'scoutaqua@gmail.com',
            pass:'thisworks'
        }
    });
    let mailopt={
        from: '"MEE"',
        to:user.email,
        subject: "Hi",
        html:`<h1>Hi ${user.name}</h1><br>
        <h3>Thank you for your request</h3><br>
        <h3>Your request was : " ${user.request} "</h3><br>
        <h5>We are working towards a solution for your request.</h5><br>`
    };
    let info = await transporter.sendMail(mailopt);
}




async function sendmail1(user){
    let transporter=nodemailer.createTransport({
        host:"smtp.gmail.com",
        port:587,
        secure:false,
        auth:{
            user:'scoutaqua@gmail.com',
            pass:'thisworks'
        }
    });
    let mailopt={
        from: '"MEE"',
        to:user.email,
        subject: "Hi",
        html:`<h1>Hi ${user.name}</h1><br>
        <h3>Thank you for buying at our store</h3><br>
        <h3>The games you bought are : " ${user.games} "</h3><br>
        <h4>Total cost: $ ${user.totalprice} </h4><br>
        <h5>Your games will shortly be available on your steam account.</h5><br>
        <h5>We request you to create one with the same email "${user.email}" provided to us, if you have not already.</h5>`
    };
    let info = await transporter.sendMail(mailopt);
}


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

router.get('/stats',(req,res)=>{
    Stat.find((err,doc)=>{
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
