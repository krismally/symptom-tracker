// dependencies
const express = require("express");
const router = express.Router();
const TayLog = require("../models/tayLogs.js")

// tay's temp logs
// I
router.get("/", (req, res) => {
    TayLog.find({}, (error, allLogs) => {
        res.render("tayTemp/tayIndex.ejs", {
            logs: allLogs,
        });
    });
});

// N
router.get("/new", (req, res) => {
    res.render("tayTemp/tayNew.ejs");
});

// D
router.delete("/:id", (req, res) => {
    TayLog.findByIdAndRemove(req.params.id, (error, data) => {
        res.redirect("/logr/tay");
    });
});

// U
router.put("/:id", (req, res) => {
    if (req.body.completed === "on") {
        req.body.completed = true;
    } else {
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

    req.body.foodLog = [{
        breakfast: req.body.breakfast,
        lunch: req.body.lunch,
        dinner: req.body.dinner,
        snacks: req.body.snacks,
    }];

    TayLog.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
            new: true,
        },
        (error, updatedLog) => {
            res.redirect(`/logr/tay/${req.params.id}`);
        }
    );
});

// C
router.post('/', (req, res) => {
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
    req.body.foodLog = [{
        breakfast: req.body.breakfast,
        lunch: req.body.lunch,
        dinner: req.body.dinner,
        snacks: req.body.snacks,
    }];
	TayLog.create(req.body, (error, createdLog) => {
        res.redirect("/logr/tay");
    });
});



// E
router.get("/:id/edit", (req, res) => {
    TayLog.findById(req.params.id, (error, foundLog) => {
        res.render("tayTemp/tayEdit.ejs", {
            log: foundLog,
        });
    });
});

// S
router.get("/:id", (req, res) => {
    TayLog.findById(req.params.id, (error, foundLog) => {
        res.render("tayTemp/tayShow.ejs", {
            log: foundLog,
        });
    });
});

module.exports = router;