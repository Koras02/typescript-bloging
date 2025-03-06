// let suits = ['hearts', 'speed', 'clubs', 'docker'];

// function pickCard(x: string | number | any[]): any {
//   // 인자가 배열 또는 객체인지 확인 맞다면, deck을 주고 card 선택
//   if (typeof x == 'object') {
//     let pickedCard = Math.floor(Math.random() * x.length);
//     return pickedCard;
//   }

//   // 그렇지 않다면 그냥 card를 선택
//   else if (typeof x == 'number') {
//     let pickedSuit = Math.floor(x / 13);
//     return { suit: suits[pickedSuit], card: x % 13 };
//   }
// }

// let myDeck = [
//   { suit: 'diamonds', card: 2 },
//   { suit: 'spades', card: 10 },
//   { suit: 'hearts', card: 4 },
// ];

// let pickedCard1 = myDeck[pickCard(myDeck)];
// console.log('card:' + pickedCard1.card + 'of' + pickedCard1.suit);

// let pickedCard2 = pickCard(15);
// console.log('card: ' + pickedCard2.card + ' of ' + pickedCard2.suit);

let suits = ['hearts', 'speed', 'clubs', 'docker'];

function pickCard(x: { suit: string; card: number }[]): number;
function pickCard(x: number): { suit: string; card: number };

function pickCard(x: string | number | any[]): any {
  // 인자가 배열 또는 객체인지 확인 맞다면, deck을 주고 card 선택
  if (typeof x == 'object') {
    let pickedCard = Math.floor(Math.random() * x.length);
    return pickedCard;
  }

  // 그렇지 않다면 그냥 card를 선택
  else if (typeof x == 'number') {
    let pickedSuit = Math.floor(x / 13);
    return { suit: suits[pickedSuit], card: x % 13 };
  }
}

let myDeck = [
  { suit: 'diamonds', card: 2 },
  { suit: 'spades', card: 10 },
  { suit: 'hearts', card: 4 },
];

let pickedCard1 = myDeck[pickCard(myDeck)];
console.log('card:' + '' + pickedCard1.card + 'of' + pickedCard1.suit);

let pickedCard2 = pickCard(15);
console.log('card: ' + pickedCard2.card + ' of ' + pickedCard2.suit);
