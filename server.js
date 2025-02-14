const dotenv = require("dotenv"); // require package
dotenv.config(); // Loads the environment variables from .env file
const express = require("express");
const mongoose = require('mongoose');

const app = express();

mongoose.connect(process.env.MONGODB_URI);

mongoose.connection.on('connected', ()=> {
    console.log(`connected on mongoDB ${mongoose.connection.name}`)
});


// GET /
app.get("/", async (req, res) => {
    res.render("index.ejs");
  });

app.listen(3000, () => {
  console.log('Listening on port 3000');
});