import objx from './index.js';
import assert from 'assert';

// Test input with functions
const input = {
  add: "function(a, b) { return a + b; }",
  multiply: "function(a, b) { return a * b; }",
  factorial: "function(n) { return n <= 1 ? 1 : n * arguments.callee(n - 1); }",
  meta: {
    describe: "function() { return 'test ok'; }"
  }
};

// Parse using objx
const result = objx(input);

// Assertions
assert.strictEqual(typeof result.add, 'function', 'add should be a function');
assert.strictEqual(result.add(2, 3), 5, '2 + 3 should be 5');

assert.strictEqual(result.multiply(4, 5), 20, '4 * 5 should be 20');

assert.strictEqual(result.factorial(5), 120, 'factorial(5) should be 120');

assert.strictEqual(result.meta.describe(), 'test ok', 'describe() should return "test ok"');

console.log('✅ All tests passed!');

