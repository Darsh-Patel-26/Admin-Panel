require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const coonectDB = require("./connect/connect.js");
const app = express();
const port = 4000 || process.env.PORT;
const ps = `darsh%402510`;
const str = `mongodb+srv://darsh2510:${ps}@project.wt9x4.mongodb.net/?retryWrites=true&w=majority&appName=Project`;
const hostel_router = require("./routers/hostel.js");
const scholar_router = require("./routers/scholar.js");
const join_router = require("./routers/join.js");
const register_router = require("./routers/register.js");

app.use(express.static("./public"));
app.use(express.json());
app.use("/api/hostel",hostel_router);
app.use("/api/scholarship",scholar_router);
app.use("/api/joinUs",join_router);
app.use("/api/register",register_router);
async function start(){
    try{
        await coonectDB(str);
        app.listen(port,()=>{console.log("Ready to go");});
    }catch(e){
        console.log(e);
    }
}start();