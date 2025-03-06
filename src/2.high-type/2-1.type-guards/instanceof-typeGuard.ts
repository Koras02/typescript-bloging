class Computer {}
class Graphics extends Computer {
  graphics() {
    console.log('RTX 5070');
  }
}

function isDesktop(card: Computer): card is Graphics {
  return card instanceof Graphics;
}

const rtx: Computer = new Graphics();

if (isDesktop(rtx)) {
  rtx.graphics(); // 안전하게 Desktop 타입으로 사용
  console.log('My Graphics Card');
}
