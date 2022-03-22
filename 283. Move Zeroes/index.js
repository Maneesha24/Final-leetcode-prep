/**
 * @author maneeshavenigalla
 * Given an integer array nums, move all 0's to the end of it while maintaining the 
 * relative order of the non-zero elements.
 * @param {number[]} nums
 * @return {number[]} 
 */
var moveZeroes = function (nums) {
    var len = nums.length;
    var lastZeroIndex = -1;

    for (var i = 0; i < len; i++) {
        if (nums[i] === 0 && lastZeroIndex === -1) {
            lastZeroIndex = i;
        } else if (nums[i] !== 0 && lastZeroIndex !== -1) {
            [nums[i], nums[lastZeroIndex]] = [nums[lastZeroIndex], nums[i]]
            lastZeroIndex += 1;
        }
    }

    return nums;
};

module.exports = moveZeroes;