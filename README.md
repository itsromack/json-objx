# json-objx
A lightweight JavaScript utility that extends the built-in JSON object with the method JSON.objx, enabling conversion of JSON-like objects with stringified functions into fully executable JavaScript objects.

✅ How to Use
In Node.js or Bun:
bash
Copy
Edit
npm install json-objx
# or
bun add json-objx
js
Copy
Edit
import objx from 'json-objx';

const obj = objx({
  add: "function(a, b) { return a + b; }"
});

console.log(obj.add(1, 2)); // 3
Or using CommonJS:
js
Copy
Edit
const objx = require('json-objx');

const obj = objx({
  factorial: "function(n) { return n <= 1 ? 1 : n * arguments.callee(n - 1); }"
});

console.log(obj.factorial(5)); // 120

