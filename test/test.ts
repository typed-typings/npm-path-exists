import test = require('blue-tape');

import pathExists = require('path-exists');

test('pathExists', t => {
  return pathExists('../test').then(actual => {
    t.true(actual, 'work with directory');
  });
});
test('pathExists', t => {
  return pathExists('../test/test.ts').then(actual => {
    t.true(actual, 'work with file');
  });
});

test('pathExists.sync', t => {
  t.true(pathExists.sync('../test'), 'work with directory');
  t.end();
});

test('pathExists.sync', t => {
  t.true(pathExists.sync('../test/test.ts'), 'work with file');
  t.end();
});
