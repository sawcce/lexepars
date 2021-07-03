const { compare, whichOneOf } = require("../methods/compare");
const { TokenType } = require("../classes/tokens.js");

let WhiteSpace = new TokenType({ name: "WhiteSpace", regex: ' +' });
let StringToken = new TokenType({ name: "String", regex: '".*?"' });

it("should match", () => {
  let [match, err] = compare(StringToken, '"hello"');
  expect(match).toBe('"hello"');
  expect(err).toBe(null);
});

it("should match a string", () => {
  let [match, err] = whichOneOf([StringToken, WhiteSpace], '"hello"');
  expect(match.value).toBe('"hello"');
  expect(match.tokenType).toBe('String');
  expect(err).toBe(null);
});
