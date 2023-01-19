const express = require('express');
const ejs = require('ejs');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 8000;

// ROUTE IMPORTS

const homeRouter = require('./routes/home');
const aboutRouter = require('./routes/about');
const contactRouter = require('./routes/contact');

// VIEW ENGINE SET-UP
app.set('view engine', 'ejs');
app.set('views', './views');

// ROUTE MIDDLEWARES
app.use('/', homeRouter);
app.use('/about', aboutRouter);
app.use('/contact', contactRouter);

app.listen(PORT, () => {
    console.log(`Connected to: http://localhost:${PORT}`);
})