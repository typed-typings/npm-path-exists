import test = require('blue-tape');

import pathExists = require('path-exists');

test('pathExists', t => {
  return pathExists('../test').then(actual => {
    t.is(actual, true, 'work with directory');
  });
});
test('pathExists', t => {
  return pathExists('../test/test.ts').then(actual => {
    t.is(actual, true, 'work with file');
  });
});
