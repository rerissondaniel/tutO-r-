const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const cors = require('cors');

const winston = require('./_utils/config/logger-config.util');

const app = express();
app.use(cors());
app.use(morgan('combined', {stream: winston.stream}));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

const api = require('./_routes/api.routes');
app.use('/api', api);

const dbConfig = require('./_utils/config/mongoose-config.util');

const db = require('config').db;
const dbUrl = `${db.client}://${db.host}:${db.port}/${db.name}`;

dbConfig.config(`${dbUrl}`);

module.exports = app;
