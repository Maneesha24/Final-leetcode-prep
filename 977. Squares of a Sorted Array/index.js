/**
 * @author maneeshavenigalla
 * Given an integer array nums sorted in non-decreasing order, return an array of
 * the squares of each number sorted in non-decreasing order.
 * @param {number[]} nums
 * @return {number[]}
 */
 var sortedSquares = function(nums) {
    
    let left = 0;
    let right = nums.length - 1;
    let i = nums.length - 1;

    let result = [];

    while(left <= right) {
        if(nums[left] ** 2 < nums[right] ** 2) {
            result[i] = nums[right] ** 2;
            right--;
        } else {
            result[i] = nums[left] ** 2;
            left++;
        }
        i--;
    }

    return result;
};

module.exports = sortedSquares;