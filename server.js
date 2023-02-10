const express = require('express');
const ejs = require('ejs');
const path = require('path');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 8000;

// ROUTE IMPORTS

const homeRouter = require('./routes/home');
const aboutRouter = require('./routes/about');
const contactRouter = require('./routes/contact');

// MIDDLEWARES
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

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