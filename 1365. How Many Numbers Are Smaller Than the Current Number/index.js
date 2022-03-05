/**
 * @author maneesha venigalla
 * Given the array nums, for each nums[i] find out how many numbers in the array are smaller than it. That
 * is, for each nums[i] you have to count the number of valid j's such that j != i and nums[j] < nums[i]. Return the answer in an array.
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function (nums) {

    let indexObj = {};

    let result = [];

    let sortedArr = [...nums].sort((a, b) => a - b);

    for(let i = 0; i < sortedArr.length; i++) {
        if(!(sortedArr[i] in indexObj)) {
            indexObj[sortedArr[i]] = i;
        }
    }

    for(let i = 0; i < nums.length; i++) {
        result.push(indexObj[nums[i]]);
    }
    return result;
};

module.exports = smallerNumbersThanCurrent;