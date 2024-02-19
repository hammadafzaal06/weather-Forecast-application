const mongoose = require('mongoose');

const userPreferenceSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    preferredUnits: { type: String, enum: ['Celsius', 'Fahrenheit'], default: 'Celsius' },
    favoriteLocations: [{ type: String }]
});

module.exports = mongoose.model('UserPreference', userPreferenceSchema);
