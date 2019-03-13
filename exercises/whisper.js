'use strict'

/*
 * Create a `whisper` function that takes a string
 * and return the same string in lower case
 * and wrapped by `*`
 *
 */

const whisper = string => '\*' + string.toLowerCase() + '\*'
//* Begin of tests
const assert = require('assert')

assert.strictEqual(whisper('PLEASE WORK'), '\*please work\*')
// End of tests */
