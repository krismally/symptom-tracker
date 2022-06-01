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
app.get("/symptomTracker/new", (req, res) => {
    res.render("new.ejs")
});

// D
app.delete("/symptomTracker/:id", (req, res) => {
    Log.findByIdAndRemove(req.params.id, (error, data) => {
        res.redirect("/symptomTracker");
    });
});

// U
app.put("/symptomTracker/:id", (req, res) => {
    if (req.body.completed === "on") {
        req.body.completed = true
    } else {
        req.body.completed = false
    }

    Log.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
            new: true,
        },
        (error, updatedLog) => {
            res.redirect(`/symptomTracker/${req.params.id}`);
        }
    )
})

// C
app.post('/symptomTracker', (req, res) => {
    if (req.body.completed === 'on') {
		//if checked, req.body.completed is set to 'on'
		req.body.completed = true;
	} else {
		//if not checked, req.body.completed is undefined
		req.body.completed = false;
	}
    req.body.date = new Date(req.body.date);
    // could loop here - clean up later
    req.body.dayRating = Number(req.body.dayRating);
    req.body.painLvl = Number(req.body.painLvl);
    req.body.fatigueLvl = Number(req.body.fatigueLvl);
    req.body.cupsWater = Number(req.body.cupsWater);
    req.body.sleepHrs = Number(req.body.sleepHrs);
    req.body.outsideTime = Number(req.body.outsideTime);
    if (req.body.stretch === "on") {
        req.body.stretch = true;
    } else {
        req.body.stretch = false;
    }
	Log.create(req.body, (error, createdProduct) => {
        res.redirect("/symptomTracker");
    });
});

// E
app.get("/symptomTracker/:id", (req, res) => {
    Log.findById(req.params.id, (error, foundLog) => {
        res.render("edit.ejs", {
            log: foundLog,
        });
    });
});

// S
app.get("/symptomTracker/:id", (req, res) => {
    Log.findById(req.params.id, (error, foundLog) => {
        res.render("show.ejs", {
            log: foundLog,
        });
    });
});

// listener
const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`express is listening on port ${PORT}`);
})