var express = require('express');
const mongoose = require('mongoose');
var router = express.Router();
var userModel = require('../../model/userdata')

router.post('/add',function(req,res){

    var data= req.body;
    const savedata= new userModel(data);
    savedata.save(data,function(err,resp){
        if(err){
            res.send({message:"Somthing Went Wrong"})
        }else{
            res.send(resp)
        }
    })
})

router.get('/id',function(req,res){
userModel.find({_id:mongoose.Types.ObjectId(req.query.id)},function(err,resp){
    if(err){
        res.send({message:"something get wrong"})
    }else{
        res.send(resp)
    }
})
})

router.get('/delete',async function(req,res){
   var data= await userModel.remove({_id:mongoose.Types.ObjectId(req.query.id)})
       res.send(data) 
    })
    

    router.put('/update',(req,res)=>{
         userModel.findByIdAndUpdate({_id:req.body.id},{$set:{
             name:req.body.name,
             age:req.body.age
         }},{upsert:true},function(err,resp){
             if(err) 
             res.send(400).send(err);
             else
             res.send(resp)
         })
    })

    module.exports=router;