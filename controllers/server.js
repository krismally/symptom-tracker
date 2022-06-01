// dependencies
const express = require("express");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
require("dotenv").config();
const app = express();
const Log = require("../models/logs.js");

// database connection
mongoose.connect(process.env.DATABASE_URL, {
	useNewUrlParser: true,
	useUnifiedTopology: true
});

// database Connection Error/Success
// define callback functions for various events
const db = mongoose.connection
db.on('error', (err) => console.log(err.message + ' is mongo not running?'));
db.on('connected', () => console.log('mongo connected'));
db.on('disconnected', () => console.log('mongo disconnected'));

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

// routes/controllers
// seed
const logSeed = require("../models/logsSeed.js");

app.get("/symptomTracker/seed", (req, res) => {
    Log.deleteMany({}, (error, allLogs) => {});

    Log.create(logSeed, (error, data) => {
        res.redirect("/symptomTracker");
    });
});

// I
app.get("/symptomTracker", (req, res) => {
    Log.find({}, (error, allLogs) => {
        res.render("index.ejs", {
            logs: allLogs,
        });
    });
});

// N

// D

// U

// C

// E

// S

// listener
const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`express is listening on port ${PORT}`);
})