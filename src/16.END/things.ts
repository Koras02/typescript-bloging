const anime: string[] = ['귀멸의 칼날', '에반게리온', '빙과', '나츠메 우인장'];

anime.push('나루토'); // 가능
console.log(anime); // [ '귀멸의 칼날', '에반게리온', '빙과', '나츠메 우인장', '나루토' ]

// anime = ['스즈미야 하루히의 우울', '소드 아트 온라인']; // ❌ 에러

// 타입 불일치 에러 방지
let Today: string = 'Thursday';
// Today = 21; //  ❌ 에러
console.log(Today);
