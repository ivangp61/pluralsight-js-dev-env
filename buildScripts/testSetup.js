// This file isn't, so must use CommonJS and ES5.

// Register babel to transpile before oru tests run.
require('babel-register')();

// Disable webpack features that Mocha doesn't understand.
require.extensions['.css'] = function() {};
