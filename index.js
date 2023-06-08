// import the express module in express:
const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const port = 8000;
// now we need to import express ejs layouts:
const expressLayouts = require('express-ejs-layouts');

const db = require('./config/mongoose');

// reading through the post request:
app.use(express.urlencoded());

// for reading & writing into cookies we will using the cookieparsor:
app.use(cookieParser());

// in which folder look for static file:
app.use(express.static('./assets'));
app.use(expressLayouts);


// extract style and scripts from sub pages into the layout:
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);




// use express router:
app.use('/', require('./routes'));



// set our views engine:
// We need used ejs as my views engines:
app.set('view engine', 'ejs');
// we can set the path of the ejs module:
app.set('views', './views');




app.listen(port, function(err) {
    if(err){
        // both are same:
        // console.log('Error: ', err);
        console.log(`Error in running the server: ${err}`);
    }
    // console.log('Server is running on port:'+ port);
    console.log(`Server is running on port: ${port}`);
});