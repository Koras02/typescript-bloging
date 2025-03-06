interface UIElement {
  addClickListener(onclick: (this: void, e: Event) => void): void;
}

// class Handler {
//     info: string;
//     onClickBad(this: Handler, e: Event) {
//         // 콜백을 쓰면 런타임에 충돌
//         this.info = e.message
//     }
// }

// let h = new Handler();
// uiElement.addClickListener(h.onClickBad) // Error

// class Handler {
//   info: string;
//   onClickGood(this: Handler, e: Event) {
//     // void 타입으로 this는 이곳에서 쓸 수 없음
//     console.log('clicked');
//   }
// }

// let h = new Handler();
// uiElement.addClickListener(h.onClickGood);

class Handler {
  info: string;
  onClickGood = (e: Event) => {
    this.info = e.message;
  };
}

let h = new Handler();
uiElement.addClickListener(h.onClickGood);
