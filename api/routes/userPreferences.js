const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const UserPreference = require("../models/userPreference");
const { createUserPreference, getAllUserPreference, getUserPreferenceById,  updateUserPreferenceById, deleteUserPreferenceById } = require("../controllers/userPreferences");


router.post("/userPreferences", createUserPreference);

router.get("/userPreferences", getAllUserPreference);

router.get("/userPreferences/:id", getUserPreferenceById);

router.patch("/userPreferences/:id", updateUserPreferenceById);

router.delete("/userPreferences/:id", deleteUserPreferenceById);

module.exports = router;
