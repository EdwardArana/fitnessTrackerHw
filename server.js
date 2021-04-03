const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.envPORT || 3000;
const app = express();

app.use(logger("dev"));
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static("public"));