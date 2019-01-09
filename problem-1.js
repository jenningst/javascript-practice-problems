/**
 * Multiples of 2 Numbers
 * Returns the sum of all multiples of 2 params (param1 and param2) below a number (ceiling)
 * @param {Number} ceiling 
 * @param {Number} factorA The first number for finding multiples.
 * @param {Number} factorB The second number for finding multiples.
 * @returns {Number} The sum of all multiples factorA and factorB less than the ceiling.
 */

 // BASIC SOLUTION
function sumAllMultiples(ceiling, factorA, factorB) {
    // 1. list all multiples of 3 or 5 less than our ceiling
    let sum = 0;
    for (let index = 1; index < ceiling; index++) {
        if (index % 3 === 0 || index % 5 === 0) {
            // add valid number to sum
            sum += index;
        }
    }
    // 3. return the sum of all numbers
    return sum;
}

// TESTS
console.log(sumAllMultiples(1000, 3, 5)); // should return 23

module.exports = sumAllMultiples();
