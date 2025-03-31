(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if (typeof exports === 'object') {
    module.exports = factory();
  } else {
    root.myModule = factory();
  }
})(this, function () {
  return {
    greet: function () {
      console.log('Hello, UMD!');
    },
  };
});
