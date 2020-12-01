const { schedulingPolicy } = require('cluster');
var fs = require('fs');

// https://nodejs.org/api/readline.html
const readline = require('readline');

async function topScores(request, response) {
    var scores = [];
    const rl = readline.createInterface({
        input: fs.createReadStream('scores.txt'),
        output: process.stdout,
        terminal: false,
    });

    for await (const line of rl) {
        const json = JSON.parse(line);
        scores.push(json);
    }

    console.log(scores);

    response.send(scores);
}

module.exports = topScores;
