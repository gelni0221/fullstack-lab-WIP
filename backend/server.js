const express = require('express');
const app = express();
const morgan = require('morgan');

require('dotenv').config();
const NODE_PORT = process.env.NODE_PORT || 5000;    

// Middleware to parse JSON request bodies - to make the data in json instead of like a string
app.use(express.json());

// Middleware to parse URL-encoded request bodies
app.use(express.urlencoded({ extended: true }));

// Middleware to serve static files from a directory -- in order to take the files 
app.use(express.static('public'));

// THIS MIDDLEWARE IS TO MAKE A CONSOLE LOG THAT SHOWS SOMEONE USED A ROUTE
app.use(morgan('combined'));


// INSTEAD OF THIS
// app.use((req, res, next) => {
//   console.log('Users Router Time:', Date.now());
//   next();
// });





app.listen(NODE_PORT, () => {
    console.log(`Listening in http://localhost:${NODE_PORT}`);
}
)