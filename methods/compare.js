const { Token } = require("../classes/tokens");

function compare(tokenType, str) {
  let r = tokenType.regex;
  let m = r.exec(str);

  if (m == null) {
    return [null, `No match for token of type ${r.type} on '${str}'`];
  } else {
    return [m[0], null];
  }
}

function whichOneOf(tokenTypes, str) {
  for (tokenType of tokenTypes) {
    let [match, err] = compare(tokenType, str);
    if (!err) {
      let tk = new Token({
        tokenType: tokenType.name,
        value: match,
        skipped: tokenType.skipped,
      });
      return [tk, null];
    }
  }

  let strTypes = tokenTypes.map((tokenType) => tokenType.name).join(", ");

  return [null, `No match out of the provided types : ${strTypes}`];
}

function compareMultiple(tokenTypes, str) {
  let final = [];

  for (let i = 0; i < str.length; i++) {
    let [token, err] = whichOneOf(tokenTypes, str.slice(i));
    if(err) { return [null, err]; }
    i += token.length;
    if(!token.skipped) final.push(token);
  }

  return [final, null];
}

module.exports = {
  compare,
  whichOneOf,
  compareMultiple,
};
