const { TokenType } = require('../classes/tokens.js');
const { Lexer } = require('../classes/lexer.js');
const { whichOneOf } = require('../methods/compare');

let WhiteSpace = new TokenType({ name: 'WhiteSpace', regex: ' +' });
let StringToken = new TokenType({ name: 'String', regex: '".*?"' });

let lexer = new Lexer([StringToken, WhiteSpace]);

test('', () => {
	let [result, err] = lexer.tokenize(' "sdfdsfd"');
	console.log(result, err);
});
