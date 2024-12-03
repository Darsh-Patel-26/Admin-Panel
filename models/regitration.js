const mongoose = require("mongoose");

const regist = new mongoose.Schema({
    username:{type:String},
    email:{type:String},
    password:{type:String}
});

module.exports = mongoose.model('registration',regist,'registration');