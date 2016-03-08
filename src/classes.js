'use strict';
h.logHeader('Classes');

// test 1
class Animal {// parent class
  constructor(name) {
    this.name = name;
  }

  get name() {// getter
    h.d('getter', 'name', this._name);
    return this._name;
  }

  set name(value) {// setter
    h.d('setter', 'name', value);
    this._name = value;
  }

  showName() {
    h.l(this.name);
  }

  walk() {
    h.l('I walk');
  }

  ['go'.toUpperCase()]() {
    h.l('GO!');
  }
}

class Rabbit extends Animal {// children class
  constructor(name) {
    super(name);// call parent constructor
  }

  walk() {
    super.walk();// call parent method
    h.l('...and jump!');
  }

  static createTonny() {// static method
    return new Rabbit('Tonny');
  }

  static get type() {// static getter
    return 'Rabbit';
  }
}

var rabbit = new Rabbit('Bunny');
rabbit.showName();// Bunny
rabbit.walk();// I walk \n ...and jump!
rabbit.GO();// GO!

h.l(Rabbit.type);// Rabbit

var rabbitTonny = Rabbit.createTonny();
rabbitTonny.showName();// Tonny

// test 2
var User = class {// class expression
  sayHi() {
    h.l('Hi!');
  }
};

new User().sayHi();// Hi!
