"use strict";

var h = {}; // helper

h.l = function() {
  console.log.apply(console, arguments);
};

h.d = function() {
  console.info.apply(console, arguments);
};

h.logHeader = function(value) {
  console.log(' \n', value);
};

// for node
try {
  GLOBAL.h = h;
} catch (error) {}
