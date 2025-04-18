const express = require('express');
const path = require('path');
const app = express();



// Set up the view engine (EJS, Pug, etc.)
app.set('view engine', 'ejs'); // or 'pug', 'hbs', etc.
app.set('views', path.join(__dirname, 'views'));

// Serve static files from public folder
app.use(express.static(path.join(__dirname, 'public')));


// Route
app.get('/', (req, res) => {
  res.render('index'); // This will render views/index.ejs
});

// Start server
app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
