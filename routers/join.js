const express = require("express");
const mongoose = require("mongoose");
const join_router = express.Router();
const join_model = require("../models/join.js");

join_router.get("/",async (req,res)=>{
    try{
        const data = await join_model.find({});
        if(!data){
            res.status(404).json({msg:"Error While Fetching or Empty Dataset"});
            return;
        }
        res.status(200).json(data);
    }catch(e){
        console.log(e);
        res.status(404).json({msg:e});
    }
});
join_router.post("/",async (req,res)=>{
    try{
        const data = await join_model.create(req.body);
        if(!data){
            res.status(404).json({msg:"Error While creating Data"});
            return;
        }
        res.status(200).json(data);
    }catch(e){
        console.log(e);
        res.status(404).json({msg:e});
    }
});
join_router.get("/:id",async (req,res)=>{
    try{
        const {id} = req.params;
        const data = await join_model.find({_id:id});
        if(!data){
            res.status(404).json({msg:"Error While Fetching or Empty Dataset"});
            return;
        }
        res.status(200).json(data);
    }catch(e){
        console.log(e);
        res.status(404).json({msg:e});
    }
});
join_router.delete("/:id",async (req,res)=>{
    try{
        const {id} = req.params;
        const data = await join_model.findByIdAndDelete(id);
        if(!data){
            res.status(404).json({msg:"Error While Fetching or Empty Dataset"});
            return;
        }
        res.status(200).json(data);
    }catch(e){
        console.log(e);
        res.status(404).json({msg:e});
    }
});

module.exports = join_router;