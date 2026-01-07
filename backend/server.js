const express = require('express');
const app = express();

require('dotenv').config();
const NODE_PORT = process.env.NODE_PORT || 5000;

// Middleware to parse JSON request bodies - to make the data in json instead of like a string
app.use(express.json());

// Middleware to parse URL-encoded request bodies
app.use(express.urlencoded({ extended: true }));

// Middleware to serve static files from a directory -- in order to take the files 
app.use(express.static('public'));















app.listen(NODE_PORT, () => {
    console.log(`Listening in http://localhost:${NODE_PORT}`);
}
)