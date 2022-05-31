// dependencies
const express = require("express");
const mongoose = require("mongoose");
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

// I

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