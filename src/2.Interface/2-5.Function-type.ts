interface SearchFunction {
  (source: string, subString: string): boolean;
}

let Searching: SearchFunction;
Searching = function (source: string, subString: string) {
  let result = source.search(subString);
  return result > -1;
};

// let mySearch: SearchFunction;
// mySearch = function (src: string, sub: string): boolean {
//   let result = src.search(sub);
//   return result > -1;
// };

// let mySearch: SearchFunction;
// mySearch = function (src, sub) {
//   let result = src.search(sub);
//   return result > -1;
// };

let mySearch: SearchFunction;

// error Type '(src: string, sub: string) => string' is not assignable to type 'SearchFunction'.
mySearch = function (src, sub) {
  let result = src.search(sub);
  return result > -1;
};
