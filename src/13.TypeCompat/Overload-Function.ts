function pickCard(x: { suit: string; card: number }[]): number;
function pickCard(x: number): { suit: string; card: number };
function pickCard(x: any): any {
  if (typeof x === 'number') {
    console.log('Number of cards:', x);
    return { suit: 'Hearts', card: x };
  }
  console.log('pickCard array:', x);
  return 0;
}

console.log(pickCard(5)); // { suit: 'Hearts', card: 5 }
console.log(
  pickCard([
    { suit: 'Hearts', card: 1 },
    { suit: 'Diamonds', card: 2 },
  ])
);
