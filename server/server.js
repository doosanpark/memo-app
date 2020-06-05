var express = require('express');
var mysql = require('mysql');
var dbconfig = require('./database.js');
var connection = mysql.createConnection(dbconfig);
const cors = require('cors');
var app = express();
require('date-utils');

var newDate = new Date();
var time = newDate.toFormat('YYYY-MM-DD');

app.set('port', process.env.PORT || 3001);
app.use(cors());
app.use(express.json());

app.put('/create', function (req, res) {
    var m_title = req.body.title;
    var m_category = req.body.category;
    var m_content = req.body.content;
    var m_nickname = "doosan";

    /*var sql = 'INSERT INTO memo (title, category, content, reg_date, nickname)
    VALUES('+m_title+', '+m_category+', '+m_content+', '+Date.now()+', '+"doosan"+')';*/


    var sql = 'INSERT INTO memo (title, category, content, reg_date, nickname) ' +
        'VALUES(?, ?, ?, ?, ?)';
    var params = [m_title, m_category, m_content, time, m_nickname];
    connection.query(sql, params, function (err, rows, fields) {
        if (err) {
            console.log("err", err);
        } else {
            res.send("Input Succeed");
        }
    })
})

app.get('/get', function(req, res){
    connection.query('SELECT * FROM MEMO', function(err, rows, field){
        if(!err){
            res.send(rows);
        }
        else{
            console.log('Error while performing Query.', err);
        }
    });
})

app.listen(app.get('port'), function () {
    console.log('Express server listening on port' + app.get('port'));
})