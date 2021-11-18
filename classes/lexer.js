const {compareMultiple} = require("../methods/compare");

class Lexer {
    constructor(tokens) {
        this.tokens = tokens;
    }

    tokenize(str) {
        return compareMultiple(this.tokens, str);
    }
}

module.exports = {Lexer};