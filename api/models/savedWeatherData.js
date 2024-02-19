const mongoose = require('mongoose');

const savedWeatherDataSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    weatherData: { type: mongoose.Schema.Types.ObjectId, ref: 'WeatherData', required: true },
    savedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('SavedWeatherData', savedWeatherDataSchema);
