const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose')
const accountRouter = require('./app/modules/Account/routes/index');
require("dotenv").config();

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(accountRouter);

mongoose.connect('mongodb+srv://gabriel:5ZZJ4iBIkcmSKH3e@cluster0.42ig9.mongodb.net/account?retryWrites=true&w=majority',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })

module.exports = app;
