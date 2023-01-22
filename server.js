const express = require('express');
const ejs = require('ejs');
const path = require('path');
const sass = require('node-sass');
const sassMiddleware = require('node-sass-middleware');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 8000;

// ROUTE IMPORTS

const homeRouter = require('./routes/home');
const aboutRouter = require('./routes/about');
const contactRouter = require('./routes/contact');

// MIDDLEWARES
app.use(express.json());
app.use(
    sassMiddleware({
        src: path.join(__dirname, 'sass'),
        dest: path.join(__dirname, 'public/stylesheets'),
        debug: true,
        outputStyle: 'compressed'
    })
);
app.use(express.static(path.join(__dirname, 'public')));

// VIEW ENGINE SET-UP
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

// ROUTE MIDDLEWARES
app.use('/', homeRouter);
app.use('/about', aboutRouter);
app.use('/contact', contactRouter);

app.listen(PORT, () => {
    console.log(`Connected to: http://localhost:${PORT}`);
});