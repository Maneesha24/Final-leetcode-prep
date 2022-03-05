/**
 * @author maneesha venigalla
 * Given an integer num, return the number of steps to reduce it
 * to zero.In one step, if the current number is even, you have to
 * divide it by 2, otherwise, you have to subtract 1 from it.
 * @param {number} num is the input number 
 * @return {number} the steps involved 
 */
const numberOfSteps = (num) => {
    let steps = 0;

    while(num > 0) {
        if(num%2 == 0) {
            num = num/2;
        } else {
            num--;
        }
        steps++;
    }

    return steps;
}

module.exports = numberOfSteps;