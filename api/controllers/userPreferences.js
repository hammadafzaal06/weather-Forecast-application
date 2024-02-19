const UserPreference = require("../models/userPreference");

const getAllUserPreference = async (req, res, next) => {
  try {
    const docs = await UserPreference.find();
    console.log(docs);
    res.status(201).json({
      message: " Here is the List of all the userPreference",
      userPreference: docs,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: err,
    });
  }
};

const getUserPreferenceById = async (req, res, next) => {
  try {
    const doc = await UserPreference.findById(req.params.id);
    console.log(doc);
    res.status(201).json({
      message: "Here is the search userPreference",
      userPreference: doc,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: err,
    });
  }
};

const createUserPreference = async (req, res, next) => {
  try {
    const userPreference = new UserPreference(req.body);
    const doc = await userPreference.save();
    console.log(doc);
    res.status(201).json({
      message: "userPreference is created",
      userPreference: doc,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: err,
    });
  }
};

const updateUserPreferenceById = async (req, res, next) => {
  try {
    const result = await UserPreference.findOneAndUpdate(
      { _id: req.params.id },
      { $set: req.body },
      { new: true }
    );
    console.log(result);
    res.status(201).json({
      message: " userPerference updated",
      userPreference: result,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: err,
    });
  }
};

const deleteUserPreferenceById = async (req, res, next) => {
  try {
    const result = await UserPreference.findOneAndDelete(req.params.id);
    console.log(result);
    res.status(201).json({
      message: "userPreference Deleted",
      userPreference: result,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: err,
    });
  }
};

module.exports = {
  getAllUserPreference,
  getUserPreferenceById,
  createUserPreference,
  updateUserPreferenceById,
  deleteUserPreferenceById,
};
