const Score = require('./Score');
var fs = require('fs');

// curl -X POST -H "Content-Type: application/json" -d '{"name":"Michel","date":"2020-12-01","score":15641}'  localhost:5000

const writeQueryScore = (request, response) => {
    console.log(request.body);
    const newScore = new Score(
        request.body.name,
        request.body.date,
        request.body.score
    );
    console.log(newScore);

    try {
        fs.appendFileSync('scores.txt', newScore.toString());
    } catch (err) {
        response.send(err);
    }

    response.send('well received\n');
};

module.exports = writeQueryScore;
