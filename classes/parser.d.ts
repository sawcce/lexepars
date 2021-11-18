import { TokenType, Token } from "./tokens";

export class Parser {
  tokenTypes: TokenType[];
  tokens: Token[];
  index: number;

  constructor(tokenTypes: TokenType[]);

  initialize(tokens: Token[]): void;
  consume(token: TokenType): Token;
  or(functions: Function[]): any;
}
