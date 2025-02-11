interface SquareConfig {
  color?: string;
  width?: number;
  [propName: string]: any;
}

function createSqure(config: SquareConfig): { color: string; area: number } {}

let squaureOptions = { colour: 'red', width: 100 };

let mySquare = createSqure(squaureOptions);

// let mySquare = createSqure({ width: 100, opacity: 0.5 } as SquareConfig);
