const express = require('express');
const path = require('path');
const app = express();

app.set('views', path.join(__dirname, 'views'));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.send('index');
});

module.exports = app;

