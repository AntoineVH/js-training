'use strict'

/*
 * Create the `cutFirst` function that takes a string and remove the 2 first characters
 * Create the `cutLast` function that takes a string and remove the 2 last characters
 * Create the `cutFirstLast` function that takes a string as parameter
 * and remove the 2 first characters and 2 last characters
 *
 * 
 * @notions String methods
 * https://github.com/nan-academy/refs/blob/master/js-training/methods.md#string---transform
 */

const cutFirst = string => string.substr(2)
const cutLast = string => string.slice(0, -2)
const cutFirstLast = string => string.slice(2, -2)

//* Begin of tests
const assert = require('assert')

assert.strictEqual(cutFirst('London'), 'ndon')
assert.strictEqual(cutLast('London'), 'Lond')
assert.strictEqual(cutFirstLast('London'), 'nd')

// End of tests */
