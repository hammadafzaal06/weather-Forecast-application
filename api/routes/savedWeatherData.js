const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const SavedWeatherData = require("../models/savedWeatherData");
const { createSavedWeatherData, getAllSavedWeatherData, getSavedWeatherDataById, updateSavedWeatherDataById, deleteSavedWeatherDataById } = require("../controllers/savedWeatherData");


router.post("/savedWeatherData", createSavedWeatherData);

router.get("/savedWeatherData", getAllSavedWeatherData);

router.get("/savedWeatherData/:id", getSavedWeatherDataById);

router.patch("/savedWeatherData/:id", updateSavedWeatherDataById);

router.delete("/savedWeatherData/:id", deleteSavedWeatherDataById);

module.exports = router;
