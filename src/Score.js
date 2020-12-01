/**
 * a score as it's handled within the API
 * @property {String} name
 * @property {String} date
 * @property {Number} score
 */
class Score {
    constructor(name, date, score) {
        this.name = name;
        this.date = date;
        this.score = score;
    }
    constructFromString(string) {
        const parsedJson = JSON.parse(string);
        const scoreAsNumber = parseInt(parsedJson.score);
        return new this(parsedJson.name, parsedJson.date, scoreAsNumber);
    }
    toString() {
        var string = JSON.stringify(this) + `\n`;
        return string;
    }
}

module.exports = Score;
