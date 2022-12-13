const mongoose = require('mongoose');

const connectDB = (url) => mongoose.connect(url);

mongoose.set('strictQuery', false);

module.exports = connectDB;
