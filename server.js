const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose')
const path = require("path");

require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const routes = require ("./routes/toys.js")
const userroutes = require ("./routes/users.js")
app.use (routes);
app.use (userroutes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/toytrader"), { useNewUrlParser: true };
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB connection established successfully")
});

// Serve up static assets ( on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}


//This will eventually be fetched from within client side React app
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});
//Start API server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});