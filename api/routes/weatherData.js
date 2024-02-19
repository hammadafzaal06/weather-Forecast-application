const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const WeatherData = require("../models/weatherData");
const { createWeatherData, getAllWeatherData, getWeatherDataById, updateWeatherDataById, deleteWeatherDataById } = require("../controllers/weatherData");


router.post("/weatherData", createWeatherData);

router.get("/weatherData", getAllWeatherData);

router.get("/weatherData/:id", getWeatherDataById);

router.patch("/weatherData/:id", updateWeatherDataById);

router.delete("/weatherData/:id", deleteWeatherDataById);

module.exports = router;
