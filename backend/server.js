const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose')

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());


//For connecting MongoDB
const mongoose = require("mongoose");
// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/toytrader");

const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB connection established successfully")
});

const toysRouter = require('./routes/toys');
const usersRouter = require('./routes/users');
const toylistRouter = require('./routes/toylist');
const savedtoyRouter = require('./routes/savedtoy');
const postnewRouter = require ('./routes/postnew');

app.use('/toys', toysRouter);
app.use('/users', usersRouter);
app.use('/toylist', toylistRouter);
app.use('/postnew', postnewRouter);
app.use('/savedtoy', savedtoyRouter);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
})