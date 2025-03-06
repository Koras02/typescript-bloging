interface SquareConfig {
  color?: string;
  width?: number;
  height?: number;
}

function Squarerate(config: SquareConfig): { color: string; area: number } {
  let newSquare = { color: 'green', area: 100 };
  if (config.color) {
    newSquare.color = config.color;
  }
  if (config.width) {
    newSquare.area = config.width * config.width;
  }
  return newSquare;
}

let mySquare = Squarerate({ color: 'red' });
