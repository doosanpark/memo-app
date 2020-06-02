var express = require('express');
var mysql = require('mysql');
var dbconfig = require('./database.js');
var conncection = mysql.createConnection(dbconfig);
const cors = require('cors');
var app = express;

app.set('port', process.env.PORT || 3001);
app.use(cors());

