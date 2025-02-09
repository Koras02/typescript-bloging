function warnUser(): void {
  console.log('This is my message');
}

warnUser(); // This is My message

let unusable: void = undefined;

unusable = null; // 성공 `--strictNullChecks` 사용 않할시

let un: undefined = undefined;
let nu: null = null;
