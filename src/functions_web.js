(function() {
  'use strict';
  h.logHeader('Functions web');

  // test 1
  function showMenu(title = 'No title', width = 100, height = 200) {
    h.l(title, width, height);
  }

  showMenu('Title'); // Title 100 200

  // test 2
  function show(param1, param2, ...rest) {
    h.l(param1, param2, rest);
  }

  show(1, 2, 3, 4);

  // test 3
  let options = {
    title: "Menu",
    width: 100,
    height: 200
  };

  function showMenu2({title, width, height}) {
    h.l(title, width, height); // Menu 100 200
  }

  showMenu2(options);

  // test 4
  let inc = x => x + 1;
  h.l(inc(1)); // 2
})();
