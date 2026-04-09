const assert = require('node:assert');
const { test } = require('node:test');

test('app module loads without error', () => {
  const app = require('./index');
  assert.ok(app, 'app should be defined');
});