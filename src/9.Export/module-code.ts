export const value = 100;
export function multiply(x: number) {
  return x * value;
}

// 조건부 모듈 로드
if (someCondition) {
  import('./myModule').then((module) => {
    module.sayHello();
  });
}
