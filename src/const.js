'use strict';
h.logHeader('Const');

// test 1
const value1 = 1;
h.l(value1);

try {
  value1 = 2;
} catch (error) {
  h.l(error); // TypeError: Assignment to constant variable.
}

// test 2
const user = {
  name: 'Bob'
};

user.name = 'Ted';
h.l(user.name);

try {
  user = {};
} catch (error) {
  h.l(error); // TypeError: Assignment to constant variable.
}
