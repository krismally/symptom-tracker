const mongoose = require("mongoose");

const logSchema = new mongoose.Schema({
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
    foodLog: Object,
    dayNotes: String,
});

const Log = mongoose.model("Log", logSchema);
module.exports = Log;