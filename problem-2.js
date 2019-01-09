/**
 * Even Fibonacci Numbers
 * Finds the sum of even-valued fibonacci numbers.
 * @param {Number} ceiling The highest number possible in the sequence.
 * @returns {Number} The sum of all even-valued terms.
 */

 // BASIC SOLUTION
function sumFibonacci(ceiling) {
    let lower = 1;
    let middle = 2;
    let upper = lower + middle;
    let sum = middle;
    while (upper < ceiling) {
        lower = middle;
        middle = upper;
        upper = lower + middle; 
        if (upper % 2 === 0) { 
            sum += upper;
        }
    }
    return sum;
}

// TESTS
console.log(sumFibonacci(5)); // should return 2
console.log(sumFibonacci(8)); // should return 10
console.log(sumFibonacci(55)); // should return 44
console.log(sumFibonacci(4000000)); // should return 44

module.exports = sumFibonacci();