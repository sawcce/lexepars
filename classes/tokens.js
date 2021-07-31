class Token {
  constructor({ tokenType, value, start, end, line, column, skipped }) {
    this.tokenType = tokenType;
    this.value = value;
    this.start = start | 0;
    this.end = end | start;
    this.line = line | 0;
    this.column = column | 0;
    this.skipped = skipped;
    this.length = value.length;
  }

  toString() {
    return `Token<${this.tokenType}> : '${this.value}' [${this.start}-${this.end}] ${this.line}:${this.column}`;
  }
}

class TokenType {
  constructor({ name, regex, skipped }) {
    this.name = name;
    this.regex = new RegExp("^" + regex);
    this.canContainLineBreaks = regex.indexOf("\\n") != -1
    this.skipped = skipped | false;
  }
}

module.exports =  {Token, TokenType};
