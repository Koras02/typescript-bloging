# typescript-bloging

<details>
<summary>⚙️ 1.기본 문법들</summary>

## 1. 기본적인 타입 소개

- 불리언 타입(Boolean)
- 숫자(Number)
- 문자열(String)
- 배열(Array)
- 튜플(Tuple)
- 열거형(Enum) 등

## 2. 인터페이스

- 선택적 프로퍼티(Optional Properties)
- 읽기전용 프로퍼티(Readonly properties)
- 초과 프로퍼티 검사(Excess Property Checks)
- 함수 타입(Function Types)
- 인덱서블 타입(Indexable Types)
- 클래스 타입 인터페이스 구현(Class Type Interface)
- 클래스의 스태틱과 인스턴스 차이점 등

## 3.함수

- 함수(Function)
- 함수 타입(Function-Type)
- 함수 타입 작성하기(Function-Type Write)
- 타입 추론(Inferring types)
- 선택적 매개변수와 기본 매개변수(Optional and Default Parameter)
- 나머지 매개변수(Rest Parameter)
- this, this와 화살표 함수(this and arrow functions)
- this 매개변수(this Parameter)
- 콜백에서 this 매개변수
- 오버로드(Overloads)

## 4.리터럴 타입

- 문자열 리터럴 타입(String Lateral Types)
- 숫자형 리터럴 타입(Number Lateral Types)
- 불리언 리터럴 타입(Boolean Lateral Types)
- 객체 리터럴 타입(Object Lateral Types)
- 리터럴 타입과 유니온 타입(Literal Types and Union Types)

## 5.유니언 타입

- 유니언 타입과 공동 필드
- 유니언 구별하기
- 교차 타입(Intersection Types)
- 믹스인 패턴(Mixin Pattern)

## 6.클래스

- 클래스(Classes)와 상속(Inheritance)
- 접근 지정자(public, private, protected)
- ECMAScript 비공개 필드
- 읽기 전용 지정자
- 매개변수 프로퍼티
- 접근자
- 전역 프로퍼티
- 추상 클래스
- 고급 기법

## 7.열거형

- 숫자 열거형(Numeric Enums)
- 문자열 열거형(String Enums)
- 이종 열거형(Heterogeneous enums)
- 계산된 맴버와 상수 맴버(Computed and constant members)
- 유니언 열거형과 열거형 맴버 타입
- 런타임에서 열거형
- 컴파일 시점에서 열거형
- 역 매핑
- const 열거형
- Ambient 열거형

## 8.제네릭

- 제네릭의 Hello World (Hello World of Generics)
- 제네릭 타입 변수 작업
- 제네릭 타입
- 제네릭 클래스
- 제네릭 제약조건
- 제네릭 제약조건에서 타입 매개변수 사용
- 제네릭에서 클래스 타입 사용

자세한 내용은 블로그에서 확인 가능합니다! [티스토리 블로그 링크] https://thinky.tistory.com/category/Front-End/TypeScript?page=1

지속적으로 업데이트 중

</details>

<details>
    <summary>⚙️ 2. 래퍼런스 </summary>

## 1. 고급 타입

- 교차 타입 (Intersection Types)
- 유니언 타입 (Union Types)
- 타입 가드(Type Guards)
  - 타입 서술어 사용하기 (Using type predicates)
  - in 연산자 사용하기
  - typeof 타입가드
  - instanceof 타입 가드
- 널러블 타입 (Nullable Type)
  - 선택적 매개변수와 프로퍼티
  - 타입 가드와 타입 단언
- 타입 별칭 (Type Aliases)
  - 인터페이스 vs 타입 별칭
- 문자열 리터럴 타입 (String Literal Types)
- 숫자 리터럴 타입 (Numeric Literal Types)
- 열거형 멤버 타입 (Enum Member Types)
- 판별 유니언
  - 엄격한 검사
- 인덱스 타입
  - 인덱스 타입과 인덱스 시그니처
- 매핑 타입
  - 매핑 타입의 추론
- 조건부 타입
  - 분산 조건부 타입
  - 조건부 타입의 타입 추론
  - 미리 정의된 조건부 타입

## 2. 선언 병합

- 기본 사용법(Basic Concepts)
- 인터페이스 병합 (interface Merging)
- 네임스페이스 병합 (Merging Namespaces)
- 네임스페이스와 클래스 병합 (Merging Namespaces with Classes)
- 허용되지 않는 병합 (Disallowed Merges)
  - 모듈 보강 (Module Augmentation)
  - 전역 보강 (Global augmentation)

## 3. 데코레이터

- 명령줄(tsconfig.json 수정하기)
- 데코레이터(Decorators)
- 데코레이터 팩토리(Decorator Factories)
- 데코레이터 합성(Decorator Composition)
- 여러행, 단행일 경우
- 클래스 데코리에터(Class Decorators)
- 메서드 데코리에터(Method Decorators)
- 접근자 데코레이터(Accessor Decorators)
- 프로퍼티 데코레이터(Property Decorators)
- 매개변수 데코레이터(Parameter Decorators)
- 메타 데이터(Metadata)

## 4. 유틸리티 타입

- Partial
- Required
- ReadOnly
- Record
- Pick
- Omit
- Exclude
- Extract
- NonNullable
- ReturnType

## 5. 이터러블 타입

- for..of 문
- for..of vs for..in 문
- 코드 생성 (Code generation)
- ES5 및 ES3 타게팅 (Targeting ES5 and ES3)
- ECMAScript 2015 및 상위 버전 타게팅 (Targeting ECMAScript 2015 and higher)

## 6. JSX

- 기본 사용법 (Basic usage)
- as 연산자 (The as operator)
- 타입 검사 (Type Checking)
  - 내장 요소 (Intrinsic elements)
  - 값-기반 요소 (Value-based elements)
  - 함수형 컴포넌트 (Function Component)
  - 클래스형 커포넌트 (Class Component)
  - 속성 타입 검사 (Attribute type Checking)
  - 자식 타입 검사 (Children Type Checking)
- JSX 결과 타입 (The JSX result type)
- 표현식 포함하기 (EMbedding Expressions)
- 리액트와 통합하기 (React integration)
- 팩토리 함수 (Factory Functions)

## 7. Mixin

- 믹스인 사용법(Mixin-Use)
- 믹스인 기본 클래스 정의(Mixin-Default-Class)
</details>
