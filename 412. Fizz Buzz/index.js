/**
 * @author maneesha venigalla
 * Given an integer n, return a string array answer (1-indexed) where: 
 * answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
 * answer[i] == "Fizz" if i is divisible by 3.
 * answer[i] == "Buzz" if i is divisible by 5.
 * answer[i] == i if non of the above conditions are true.
 * @param {number} n is the input num 
 * @return {string[]} is returned fizzbuzz array
 */
 const fizzBuzz = (n) => {

    let result = [];

    for(let i = 1; i <= n; i++) {
        if(i%3 == 0 && i%5 == 0) {
            result.push("FizzBuzz");
        } else if(i%3 == 0) {
            result.push("Fizz");
        } else if(i%5 == 0) {
            result.push("Buzz");
        } else {
            result.push(`${i}`)
        }
    }

    return result;
}

module.exports = fizzBuzz;