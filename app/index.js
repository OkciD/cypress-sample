'use strict';

const express = require('express');
const morgan = require('morgan');
const path = require('path');

const staticDir = path.resolve(__dirname, 'static');
const port = 8080;

const app = express();

app.use(morgan('dev'));
app.use(express.static(staticDir));


app.listen(port, () => {
	console.log(`Server started at http://localhost:${port}/`);
});
