const { Parser } = require('../classes/parser');
const { Token, TokenType } = require('../classes/tokens');
const { Lexer } = require('../classes/lexer');
const { compareMultiple } = require('../methods/compare');

const fn = new TokenType({ name: 'function', regex: /fn/ });
const identifier = new TokenType({ name: 'identifier', regex: /[_a-zA-Z]+/ });
const string = new TokenType({ name: 'string', regex: /".*?"/ });

const lbracket = new TokenType({ name: 'lb', regex: /{/ });
const rbracket = new TokenType({ name: 'rb', regex: /}/ });

const then = new TokenType({ name: 'then', regex: /then/ });
const end = new TokenType({ name: 'end', regex: /end/ });

const whiteSpace = new TokenType({ name: 'ws', regex: / /, skipped: true });

const tokens = [
	fn,
	then,
	end,
	identifier,
	string,
	lbracket,
	rbracket,
	whiteSpace,
];

class ClauseParser extends Parser {
	constructor(parsedTokens) {
		super(tokens);
		this.initialize(parsedTokens);
	}

	main() {
		try {
			this.consume(fn);

			let [notAnonymous, token] = this.option(() => {
				return this.consume(identifier);
			});

			this.or([
				() => {
					this.consume(lbracket);
					this.consume(rbracket);
				},
				() => {
					this.consume(then);
					this.consume(end);
				},
			]);

			if (notAnonymous == true) {
				return { type: 'FunctionDeclaration', name: token.value, body: {} };
			}

			return { type: 'AnonymousFunctionDeclaration', body: {} };
		} catch (err) {
			console.error(err);
			return '';
		}
	}
}

console.time('Parsing');

const Lex = new Lexer(tokens);
const [pt, err] = Lex.tokenize(`fn greet then end`);
const Par = new ClauseParser(pt);

let program = Par.main();
console.log(program);

console.timeEnd('Parsing');
