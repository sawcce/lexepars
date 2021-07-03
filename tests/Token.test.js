const {Token} = require("../classes/tokens.js");

let start = 1;
let newToken = new Token({ tokenType: "WhiteSpace",value: " ", start: start });

test("When end is undefined it equals start", () => {
  expect(newToken.end).toBe(start);
});

test("When col and line is undefined it equals 0", () => {
  expect(newToken.line).toBe(0);
  expect(newToken.column).toBe(0);
});

test("To string formatting", () => {
  expect(newToken.toString()).toBe("Token<WhiteSpace> : ' ' [1-1] 0:0");
});

