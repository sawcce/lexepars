const { compare, whichOneOf, compareMultiple } = require("../methods/compare");
const { TokenType } = require("../classes/tokens.js");

let WhiteSpace = new TokenType({ name: "WhiteSpace", regex: ' +', skipped: true });
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

it("should return a string", () => {
  let [list, err] = compareMultiple([StringToken, WhiteSpace], '"hello" "hey"');
  expect(list[0].value).toBe('"hello"');
  expect(list[0].tokenType).toBe('String');
  expect(list[1].value).toBe('"hey"');
  expect(list[1].tokenType).toBe('String');
  expect(err).toBe(null);
});

it("should return an error", () => {
  let [list, err] = compareMultiple([StringToken, WhiteSpace], 'x');
  console.error(err);
  expect(err!=null).toBe(true);
  expect(list==null).toBe(true);
});
