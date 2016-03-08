'use strict';
logHeader('Classes');

// test 1
class Animal {// parent class
  constructor(name) {
    this.name = name;
  }

  get name() {// getter
    d('getter', 'name', this._name);
    return this._name;
  }

  set name(value) {// setter
    d('setter', 'name', value);
    this._name = value;
  }

  showName() {
    l(this.name);
  }

  walk() {
    l('I walk');
  }

  ['go'.toUpperCase()]() {
    l('GO!');
  }
}

class Rabbit extends Animal {// children class
  constructor(name) {
    super(name);// call parent constructor
  }

  walk() {
    super.walk();// call parent method
    l('...and jump!');
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
rabbit.walk();//I walk \n ...and jump!
rabbit.GO();// GO!

l(Rabbit.type);// Rabbit

var rabbitTonny = Rabbit.createTonny();
rabbitTonny.showName();// Tonny

// test 2
var User = class {// class expresion
  sayHi() {
    l('Hi!');
  }
};

new User().sayHi();// Hi!