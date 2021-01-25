const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser')
const port = 3000;

app.use(express.static(path.join(__dirname, './dist')));

app.use(bodyParser.json());

app.listen(port, () => console.log(`Listening on port ${port}!`));