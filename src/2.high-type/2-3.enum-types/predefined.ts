// 타입 정의
type MixedType = string | number | null | undefined;

// Exclude 사용 예
type Excluded = Exclude<MixedType, string>; // number | null | undefined

// Extract 사용 예
type Extracted = Extract<MixedType, string>; // string

// NotNullable 사용 예
type NonNullableType = NonNullable<MixedType>; // number

// Return Type 사용 예
type Func = () => string;
type FuncReturn = ReturnType<Func>; // string

// instanceType 사용 예
class Animal {
  species: string;
  constructor(species: string) {
    this.species = species;
  }
}

type AnimalInstance = InstanceType<typeof Animal>; // Animal 인스턴스 타입

// 실제 값 할당
const exampleNumber: Excluded = null; // number | null | undefined 타입
const exampleString: Extracted = 'Hello World'; // string 타입
const exampleNonNullable: NonNullableType = 42; // number 타입
const exampleFunc: FuncReturn = 'Return value'; // string
const dog: AnimalInstance = new Animal('Horse'); // Animal 인스턴스

// 출력
console.log('Excluded Type Example:', exampleNumber); // result: Excluded Type Example: null
console.log('Extracted Type Example:', exampleString); // result: Extracted Type Example: Hello World
console.log('NonNullable Type Example:', exampleNonNullable); // result: NonNullable Type Example: 42
console.log('Function Return Example:', exampleFunc); // result: Function Return Example: Return Type
console.log('Animal Instance Example:', dog.species); // result: Animal Instance Example: Horse
