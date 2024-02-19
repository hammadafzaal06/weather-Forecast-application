const WeatherData = require("../models/weatherData");

const getAllWeatherData = async (req, res, next) => {
  try {
    const docs = await WeatherData.find();
    console.log(docs);
    res.status(201).json({
      message: "Here is the weatherData",
      weatherData: docs,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: err,
    });
  }
};

const getWeatherDataById = async (req, res, next) => {
  try {
    const doc = await WeatherData.findById(req.params.id);
    console.log(doc);
    res.status(201).json({
      message: " Here the Search weatherData",
      weatherData: doc,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: err,
    });
  }
};

const createWeatherData = async (req, res, next) => {
  try {
    const weatherData = new WeatherData({
      location: req.body.location,
      temperature: req.body.temperature,
      humidity: req.body.humidity,
      windSpeed: req.body.windSpeed,
    });
    const doc = await weatherData.save();
    console.log(doc);
    res.status(201).json({
      message: "weatherData created",
      weatherData: doc,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: err,
    });
  }
};

const updateWeatherDataById = async (req, res, next) => {
  try {
    const result = await WeatherData.findOneAndUpdate(
      { _id: req.params.id },
      {
        $set: {
          location: req.body.location,
          temperature: req.body.temperature,
          humidity: req.body.humidity,
          windSpeed: req.body.windSpeed,
        },
      },
      { new: true }
    );
    console.log(result);
    res.status(201).json({
      message: "weatherData is updated",
      weatherData: result,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: err,
    });
  }
};

const deleteWeatherDataById = async (req, res, next) => {
  try {
    const result = await WeatherData.findOneAndDelete(req.params.id);
    console.log(result);
    res.status(201).json({
      message: " weatherData is deleted",
      weatherData: result,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: err,
    });
  }
};

module.exports = {
  getAllWeatherData,
  getWeatherDataById,
  createWeatherData,
  updateWeatherDataById,
  deleteWeatherDataById,
};
