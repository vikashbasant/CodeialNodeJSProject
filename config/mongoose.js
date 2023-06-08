// import mongoose:
const mongoose = require('mongoose');
// mongoose is connected to our database:
mongoose.connect('mongodb://localhost/codeial_development');

const db = mongoose.connection;

db.on('error', console.error.bind(console, "error connecting to Mongodb"));

db.once('open', function(){
    console.log('Connected to Database :: MongoDB');
});

module.exports = db;
