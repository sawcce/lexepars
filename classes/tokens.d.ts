type Args = {
  tokenType: string;
  value: string;
  start: number;
  end: number;
  line: number;
  column: number;
};

export class Token {
  constructor(
    {
      tokenType,
      value,
      start,
      end,
      line,
      column,
    }: {
      tokenType: string;
      value: string;
      start: number;
      end: number;
      line: number;
      column: number;
    },
  );

  toString(): string;
}

export class TokenType {
  name: string;
  regex: RegExp;
  canContainLineBreaks: boolean;
  skipped: boolean;

  constructor(
    { name, regex, skipped }: { name: string; regex: RegExp; skipped?: boolean },
  );
}
