class Token {
  constructor(
    {
      tokenType: string,
      value: string,
      start: number,
      end: int,
      line: number,
      column: int,
    },
  );

  toString(): string;
}
