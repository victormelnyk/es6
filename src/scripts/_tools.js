"use strict";

function l() {
  console.log.apply(console, arguments);
}

//! for node
GLOBAL.l = l;