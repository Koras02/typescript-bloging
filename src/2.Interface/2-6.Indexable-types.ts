interface StringArray {
  [index: number]: string;
}

let myArray: StringArray;
myArray = ['Bob', 'Feed'];

let myStr: string = myArray[0];

class Animal {
  name: string;
}

class Dog extends Animal {
  bread: string;
}

// 오류: 숫자형 문자열로 인덱싱 하면 완전히 다른 타입의 Animal을 얻게됨
interface NotOkay {
  [x: number]: Animal;
  [x: string]: Dog;
}

interface NumberDictionary {
  [index: string]: number;
  length: number; // Success length is number
  name: string; // Fail, 'name' is type not index
}

interface NumberOrStringDictionary {
  [index: string]: number | string;
  length: number; // Success, length is number
  name: string; // Success, name is String
}

interface ReadonlyStringArray {
  readonly [index: number]: string;
}

let NameArray: ReadonlyStringArray = ['Robe', 'Chick'];
myArray[2] = 'Mollory'; // Error;
