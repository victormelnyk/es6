(function() {
  'use strict';

  h.logHeader('Functions');

  // test 1
  /* node SyntaxError: Unexpected token
  function showMenu(title = 'No title', width = 100, height = 200) { =
    h.l(title, width, height);
  }

  showMenu('Title'); // Title 100 200
  */

  // test 2
  /* SyntaxError: Unexpected token ...
  function show(param1, param2, ...rest) {
    h.l(param1, param2, rest);
  }

  show(1, 2, 3, 4);
  */

  // test 3
  var numbers = [2, 3, 15];
  var max = Math.max(...numbers);
  h.l(max); // 15

  // test 4
  /* node SyntaxError: Unexpected token {
  let options = {
    title: "Menu",
    width: 100,
    height: 200
  };

  function showMenu({title, width, height}) {
    h.l(title, width, height); // Menu 100 200
  }

  showMenu(options);
  */

  // test 4
  let inc = x => x + 1;
  h.l(inc(1)); // 2
})();
