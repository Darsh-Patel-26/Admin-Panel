const mongoose = require("mongoose");

const scholarship = new mongoose.Schema({
	name:{type:String,required:true},
	isGovernment :{type:Boolean,required:true},
	reward:{type:Number,required:true},
	howToFill:{type:[String],required:true},
	whoAreEligable:{type:[String],required:true},
	officialLink:{type:String,required:true},
	isLive:{type:Boolean,required:true},
	startDate:{type:Date,required:true},
	endDate:{type:Date,required:true}
});
module.exports = mongoose.model("scholarship",scholarship,"scholarships");