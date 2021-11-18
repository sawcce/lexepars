///<reference path="./parser.d.ts" />
const { TokenType } = require('./tokens');

class Parser {
	constructor(tokenTypes) {
		this.tokenTypes = tokenTypes;
	}

	initialize(tokens) {
		this.tokens = tokens;
		this.index = 0;
	}

	consume(token) {
		let current = this.tokens[this.index];

		if (current.tokenType == token.name) {
			this.index++;
			return current;
		}

		throw new Error(
			`Unexpected token: <${current.tokenType}>"${current.value}", expected: ${token.name} at ${current.line}:${current.column}`
		);
	}

	option(rule) {
		try {
			let res = rule();
			return [true, res];
		} catch (err) {
			return [false, err];
		}
	}

	or(functions) {
        let error;
		for (let func of functions) {
			try {
				let res = func();
				return res;
			} catch (err) {
                error = err;
            }
		}

		throw new Error(
			`No rules matched, out of the ${functions.length} provided. ${error.message}`
		);
	}
}

module.exports = {
	Parser,
};
