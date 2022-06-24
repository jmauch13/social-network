// Express
const express = require('express');

const app = express();
const PORT = 3001;

app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(require('./routes'));
app.use(express.static('public'));




app.listen(PORT, () => {
    console.log('API server running on port ${PORT)!');

});