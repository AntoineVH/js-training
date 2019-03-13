'use strict'

/*
 * Create a `yell` function that takes a string
 * and return the same string in upper case
 *
 */

const yell = string => string.toUpperCase()

//* Begin of tests
const assert = require('assert')

assert.strictEqual(yell('please wOrk'), 'PLEASE WORK')
// End of tests */
