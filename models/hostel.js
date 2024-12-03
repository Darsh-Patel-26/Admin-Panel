const mongoose = require("mongoose");

const hostel = new mongoose.Schema({
	name:{type:String,required:true},
	boysAddress:{type:String},
	girlsAddress:{type:String},
	isGovernment : {type:Boolean,required:true},
	images:{type:[String]},
	details:{type:[String]},
	features:{type:[String]},
	eligable:{type:[String]},
	admissionSteps:{type:[String]},
	isAdmissionOpen:{type:Boolean},
	services:{type:[String]}
});
module.exports = mongoose.model("hostel",hostel,"hostel");