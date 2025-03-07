type Hambuger = {
  name: string;
  calories: number;
  protein: number;
  fat: number;
  sodium: number;
};

// Readonly 매핑 타입
type ReadonlyHambuger = {
  readonly [K in keyof Hambuger]: Hambuger[K];
};

const hambuger: ReadonlyHambuger = {
  name: '맥스파이시 상하이 투움바',
  calories: 489,
  protein: 10,
  fat: 6,
  sodium: 1169,
};

console.log(hambuger.calories);
hambuger.calories = 488; // 오류 발생: 읽기 전용 속성
