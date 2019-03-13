'use strict'

/*
 * Jaden Smith Case
 *
 * Make a `jadenCase` function that takes a string as parameter
 * and return the string with each words capitilized.
 *
 * Example : "How are you ?" -> "How Are You ?"
 *
 */

function jadenCase(input) {
   let split = input.toLowerCase().split(' ');
   for (let i = 0; i < split.length; i++) {
       split[i] = split[i].charAt(0).toUpperCase() + split[i].substring(1);     
   }
   return split.join(' '); 
}
//* Begin of tests
const assert = require('assert')

assert.strictEqual(jadenCase('sPoNgE bOb MeMe YoU mUsT mAkE yOuR oWn TeStS'), 'Sponge Bob Meme You Must Make Your Own Tests')
// End of tests */
