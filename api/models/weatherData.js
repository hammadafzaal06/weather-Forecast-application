const mongoose = require('mongoose');

const weatherDataSchema = new mongoose.Schema({
    location: { type: String, required: true },
    temperature: { type: Number, required: true },
    humidity: { type: String, required: true },
    windSpeed: { type: String, required: true}
});

module.exports = mongoose.model('WeatherData', weatherDataSchema);
