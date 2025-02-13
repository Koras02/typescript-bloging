// let deck = {
//   suits: ['hearts', 'spades', 'clubs', 'diamonds'],
//   cards: Array(52),
//   createCardPicker: function () {
//     return function () {
//       let pickedCard = Math.floor(Math.random() * 52);
//       let pickedSuit = Math.floor(pickedCard / 13);

//       return { suit: this.suits[pickedSuit], card: pickedCard % 13 };
//     };
//   },
// };

// let cardPicker = deck.createCardPicker();
// let pickedCard = cardPicker();

// console.log('card:' + pickedCard.card + ' of ' + pickedCard.suit);

// -----------------------------------------------------------------------------------------

let deck = {
  suits: ['hearts', 'spades', 'clubs', 'diamonds'],
  cards: Array(52),
  createCardPicker: function () {
    // 아랫줄은 화살표 함수로, 'this'를 이곳에 캡쳐
    return () => {
      let pickedCard = Math.floor(Math.random() * 52);
      let pickedSuit = Math.floor(pickedCard / 13);

      return { suit: this.suits[pickedSuit], card: pickedCard % 13 };
    };
  },
};

let cardPicker = deck.createCardPicker();
let pickedCard = cardPicker();

console.log('card:' + pickedCard.card + ' of ' + pickedCard.suit);
