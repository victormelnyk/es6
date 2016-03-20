(function() {
  'use strict';
  h.logHeader('Destructuring web');

  // test 1
  let [val1, val2] = ['Bob', 'Ted'];
  h.l(val1); // Bob
  h.l(val2); // Ted

  // test 2
  let [, , val3] = 'Val1 Val2 Val3 Val4'.split(' ');
  h.l(val3); // Val3

  // test 3
  let [val4, val5, ...rest] = 'Val1 Val2 Val3 Val4'.split(' ');
  h.l(val4); // Val1
  h.l(val5); // Val2
  h.l(rest); // [Val3, Val4]

  // test 4
  function getDefaultVal7() {
    return 'Val2';
  }

  let [val6 = 'Val1', val7 = getDefaultVal7()] = [];
  h.l(val6); // Val1
  h.l(val7); // Val2

  // test 5
  let options = {
    title: 'Menu',
    width: 100,
    height: 200
  };

  let {title, width, height} = options;
  h.l(title); // Menu
  h.l(width); // 100
  h.l(height); // 200

  // test 6
  let options2 = {
    title: 'Menu',
    width: 100,
    height: 200
  };

  let {title: t2, width: w2, height: h2} = options2;
  h.l(t2); // Menu
  h.l(w2); // 100
  h.l(h2); // 200

  // test 7
  let options3 = {
    title: 'Menu'
  };

  let {title: t3 = 'Menu2', width: w3 = '100', height: h3 = '200'} = options3;
  h.l(t3); // Menu
  h.l(w3); // 100
  h.l(h3); // 200

  // test 8
  let options4 = {
    titles: ['Menu1', 'Menu2'],
    size: {
      width2: 100,
      height2: 200
    }
  };

  let {titles: [title21, title22], size: {width2, height2}} = options4;
  h.l(title21); // Menu1
  h.l(title22); // Menu2
  h.l(width2); // 100
  h.l(height2); // 200
})();
