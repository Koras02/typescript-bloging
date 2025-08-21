// 1. number
let score: number = 100;

console.log(score); // 100;

// 2. string
let names: string = 'James';
console.log(names);

// 3. boolean
let isTrue: boolean = true;
console.log(isTrue);

// 4. any
let data: any = '123';
data = 100;

console.log(data); // 100

// 5.unknown
let value: unknown = data;

console.log(value);

// 6. array
let iceCream: string[] = [
  '엄마는 외계인',
  '바람과 함께 사라지다',
  '블랙 소르베',
];

console.log(iceCream);

// 7. tuple
let SportTeam: [string, number] = ['FC Barcelona', 1899];

console.log(SportTeam[0], SportTeam[1]);
