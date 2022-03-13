/**
 * @author maneesha venigalla
 * Given an array nums containing n distinct numbers in the range [0, n], return
 * the only number in the range that is missing from the array.
 * @param {number[]} nums
 * @return {number}
 */
 const missingNumber = (nums) => {

    let totalSum = 0;
    let arraySum = 0;

    for(const num of nums) {
        arraySum += num;
    }

    for(let i = 0; i <= nums.length; i++) {
        totalSum += i;
    }

    return totalSum - arraySum;
}

module.exports = missingNumber;