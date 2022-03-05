/**
 * @author maneeshavenigalla
 * Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).
 * Return the running sum of nums.
 * @param {number[]} nums
 * @return {number[]}
 */
 var runningSum = function(nums) {
    let sum = 0;

    return nums.map(num => sum += num);
};

module.exports = runningSum;