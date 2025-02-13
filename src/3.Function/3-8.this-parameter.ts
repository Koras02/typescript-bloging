interface Card {
  suit: string;
  card: number;
}

interface Deck {
  suits: string[];
  cards: number[];
  createCardPicker(this: Deck): () => Card;
}

let deck: Deck = {
  suits: ['hears', 'space', 'clubs', 'director'],
  cards: Array(52),

  // 아래 함수는 이제 callee가 반드시 Deck 타입이어야 함을 명시적 지정
  createCardPicker: function (this: Deck) {
    return () => {
      let pickedCard = Math.floor(Math.random() * 52);
      let pickedSuit = Math.floor(pickedCard / 13);
      return { suit: this.suits[pickedSuit], card: pickedCard % 13 };
    };
  },
};

let cardPicker = deck.createCardPicker();
let pickedCard = cardPicker();

console.log('card: ' + pickedCard.card + ' of ' + pickedCard.suit); //card: 3 of hears

// function f(this: void) {
//   // 독립형 함수는 'this'를 사용할 수 없는 것을 확인
// }
