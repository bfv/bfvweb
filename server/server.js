/**
 * Created by bronco on 31-1-14.
 */

var express = require('express');
var app = express();
var data = require('./data');

app.get('/data/*', data.get);
app.get('/', function(req, res){
  res.end('Hello world');
});

app.listen(88);
