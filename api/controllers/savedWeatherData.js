const SavedWeatherData = require("../models/savedWeatherData");

const getAllSavedWeatherData = async (req, res, next) => {
  try {
    const docs = await SavedWeatherData.find();
    console.log(docs);
    res.status(201).json({
      message: "Here is the list of savedWeatherData",
      savedWeatherData: docs,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: err,
    });
  }
};

const getSavedWeatherDataById = async (req, res, next) => {
  try {
    const doc = await SavedWeatherData.findById(req.params.id);
    console.log(doc);
    res.status(201).json({
      message: "Here is search saveWeatherData",
      savedWeatherData: doc,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: err,
    });
  }
};

const createSavedWeatherData = async (req, res, next) => {
  try {
    const savedWeatherData = new SavedWeatherData(req.body);
    const doc = await savedWeatherData.save();
    console.log(doc);
    res.status(201).json({
      message: "savedWeaherData is created",
      savedWeatherData: doc,
    });
  } catch (err) {
    console.log(err);
    req.status(500).json({
      error: err,
    });
  }
};

const updateSavedWeatherDataById = async (req, res, next) => {
  try {
    const result = await SavedWeatherData.findOneAndUpdate(
      { _id: req.params.id },
      { $set: req.body },
      { new: true }
    );
    console.log(result);
    res.status(201).json({
      message: "savedWeatherData Updated",
      savedWeatherData: result,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: err,
    });
  }
};

const deleteSavedWeatherDataById = async (req, res, next) => {
  try {
    const result = await SavedWeatherData.findOneAndDelete(req.params.id);
    console.log(result);
    res.status(201).json({
      message: "savedWeatherData is deleted",
      savedWeatherData: result,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: err,
    });
  }
};

module.exports = {
  getAllSavedWeatherData,
  getSavedWeatherDataById,
  createSavedWeatherData,
  updateSavedWeatherDataById,
  deleteSavedWeatherDataById,
};
