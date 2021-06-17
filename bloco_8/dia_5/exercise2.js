const assert = require('assert');

// escreva sum abaixo

const sum = (...numbers) => {
   const sumAllNumbers = numbers.reduce((acc, value) => {
        return acc + value;
   }, 0);
   return sumAllNumbers;
}

assert.strictEqual(sum(), 0);
assert.strictEqual(sum(1), 1);
assert.strictEqual(sum(1, 2), 3);
assert.strictEqual(sum(1, 2, 3), 6);
assert.strictEqual(sum(1, 2, 3, 4), 10);