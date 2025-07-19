/**
 * JSON.objx v1.0.0
 * Turns stringified functions in JSON into executable methods.
 * License: MIT
 */

function reviveFunctions(value) {
  if (typeof value === 'string') {
    if (/^function\s*\(.*\)\s*{[\s\S]*}$/.test(value.trim())) {
      return eval(`(${value})`);
    }
    return value;
  }

  if (Array.isArray(value)) {
    return value.map(reviveFunctions);
  }

  if (typeof value === 'object' && value !== null) {
    const newObj = {};
    for (const key in value) {
      if (Object.prototype.hasOwnProperty.call(value, key)) {
        newObj[key] = reviveFunctions(value[key]);
      }
    }
    return newObj;
  }

  return value;
}

function objx(input) {
  let parsed = input;
  if (typeof input === 'string') {
    try {
      parsed = JSON.parse(input);
    } catch (e) {
      throw new Error('Invalid JSON string provided to JSON.objx.');
    }
  }
  return reviveFunctions(parsed);
}

// Extend the native JSON object
if (typeof JSON.objx !== 'function') {
  JSON.objx = objx;
}

// Export for ESM and CommonJS
export default objx;

