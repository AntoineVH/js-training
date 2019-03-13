'use strict'

/*
 * Create a `keepFirst` function that takes a string as parameter
 * and return the string only keeping the 2 first characters
 *
 * Create a `keepLast` function that takes a string as parameter
 * and return the string only keeping the 2 last characters
 *
 * Create a `keepFirstLast` function that takes a string as parameter
 * and only keep 2 characters from the third character
 *
 */

const keepFirst = assert => { return assert.slice(0, 2) }
const keepLast = assert => { return assert.slice(assert.length-2) }
const keepFirstLast = assert => { return assert.slice(2, 4) }

//* Begin of tests
const assert = require('assert')

assert.strictEqual(keepFirst('oh my god'), 'oh')
assert.strictEqual(keepLast('oh my god'), 'od')
assert.strictEqual(keepFirstLast('oh my god'), ' m')

// End of tests */
