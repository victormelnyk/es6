(function() {
  'use strict';
  h.logHeader('Let');

  // test1
  var value1 = 5;

  if (true) {
    var value1 = 10;

    h.l(value1); // 10
  }

  h.l(value1); // 10


  let value2 = 5;

  if (true) {
    let value2 = 10;

    h.l(value2); // 10
  }

  h.l(value2); // 5

  // test 2
  if (true) {
    let value3 = 10;

    h.l(value3); // 10
  }

  try {
    h.l(value3);
  } catch (error) {
    h.l(error); // ReferenceError: value3 is not defined
  }

  // test 3
  h.l(value4); // undefined

  var value4 = 5;


  try {
    h.l(value5);
  } catch (error) {
    h.l(error); // ReferenceError: value5 is not defined
  }

  let value5 = 5;

  // test 4
  let value6;
  // let value6; // SyntaxError: Identifier 'value6' has already been declared

  // test 5
  for (let value7 = 0; value7 < 10; value7++) { }
  for (let value7 = 0; value7 < 10; value7++) { }

  try {
    h.l(value7);
  } catch (error) {
    h.l(error); // ReferenceError: value7 is not defined
  }

  // test 6
  for (let value8 = 0; value8 < 5; value8++) {
    setTimeout(function() {
      h.l(value8); // 0 1 2 3 4
    }, 0);
  }
})();
