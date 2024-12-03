const mongoose = require("mongoose");

const joinSchema = new mongoose.Schema({
    email:{type:String,required:true},
    phone:{type:String,required:true},
    class:{type:String,required:true},
    sector:{type:String,required:true},
    whytojoin:{type:String,required:true}
});
module.exports = mongoose.model("joinUs",joinSchema,"joinUs");