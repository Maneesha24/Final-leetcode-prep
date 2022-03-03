/**
 * @author maneeshavenigalla
 * Given an array of integers nums and an integer target, return indices of the
 * two numbers such that they add up to target.
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {

    let numObj = {};

    for(let i = 0; i < nums.length; i++) {
        if((target - nums[i]) in numObj) {
            return [numObj[target - nums[i]], i];
        } else {
            numObj[nums[i]] = i;
        }
    }
};

module.exports = twoSum;