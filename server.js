const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'views')));
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index');
});

// put a port here to help with easy changes
// const port = 3002;
// app.listen(port, () => {
//   console.log(`Server started on http://localhost:${port}`);
// });

module.exports = app;

