const db = require('./db');
const express = require('express');
const path = require('path');

const dbHelpers = require('./helpers/dbHelpers')(db);
const dbProductHelper = require('./helpers/dbProductHelpers')(db);

const cookieParser = require('cookie-parser');
const logger = require('morgan');
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const productRouter = require('./routes/products');

const app = express();



app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api/users', usersRouter(dbHelpers));
app.use('/api/products', productRouter(dbProductHelper));


module.exports = app;
