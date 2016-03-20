(function() {
  'use strict';
  h.logHeader('Functions');

  // test 1
  var numbers = [2, 3, 15];
  var max = Math.max(...numbers);
  h.l(max); // 15

  // test 2
  let inc = x => x + 1;
  h.l(inc(1)); // 2
})();
