const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, '../' ))); //serves the index.html
app.listen(8000); //listens on port 8000 -> http://localhost:8000/
