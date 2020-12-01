const Score = require('./src/Score');
const topScores = require('./src/topScores');
const writeQueryScore = require('./src/writeQueryScore');
var http = require('http');
var url = require('url');
var fs = require('fs');
const bodyParser = require('body-parser');
var express = require('express');
var app = express();

app.use(express.json());

app.listen(5000, () => console.log('server started at port 5000'));
app.get('/', topScores);
app.post('/', writeQueryScore);

// var query = url.parse(request.url, true).query;
// console.log('query:', query);
// var score = new Score(query.name, query.date, parseInt(query.score));
// console.log('score to record:', score.toString());
