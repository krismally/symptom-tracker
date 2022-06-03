const mongoose = require("mongoose");

const tayLogSchema = new mongoose.Schema({
    date: Date,
    dayRating: Number,
    painLvl: Number,
    fatigueLvl: Number,
    cupsWater: Number,
    sleepHrs: Number,
    outsideTime: Number,
    meds: String,
    mood: String,
    stretch: Boolean,
    foodLog: Array,
    dayNotes: String,
});

const TayLog = mongoose.model("TayLog", tayLogSchema);
module.exports = TayLog;