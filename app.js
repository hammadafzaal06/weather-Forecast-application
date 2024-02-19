const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");



const userRoutes = require("./api/routes/users");
const weatherDataRoutes = require("./api/routes/weatherData");
const userPreferenceRoutes = require("./api/routes/userPreferences");
const savedWeatherDataRoutes = require("./api/routes/savedWeatherData");



//require("dotenv").config();

mongoose.connect("mongodb://127.0.0.1:27017/weatherApp");

//app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use("/users", userRoutes);
app.use("/weatherData", weatherDataRoutes);
app.use("/userPreferences", userPreferenceRoutes);
app.use("/savedWeatherData", savedWeatherDataRoutes);






app.use((req, res, next) => {
    const error = new Error("Not found");
    error.status = 404;
    next(error);
  });
  
app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
      error: {
        message: error.message,
      },
    });
  });


module.exports= app;
