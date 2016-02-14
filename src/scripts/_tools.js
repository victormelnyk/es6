"use strict";

function l() {
  console.log.apply(console, arguments);
}

function d() {
  console.info.apply(console, arguments);
}

function logHeader(value) {
  console.log(' \n', value);
}

//! for node
try {
  GLOBAL.d = d;
  GLOBAL.l = l;
  GLOBAL.logHeader = logHeader;
} catch(error) {}