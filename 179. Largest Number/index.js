/**
 * @author maneeshavenigalla
 * Given a list of non-negative integers nums, arrange them such that they form the largest number and return 
 * it. Since the result may be very large, so you need to return a string instead of an integer.
 * @param {number[]} nums
 * @return {string}
 */
 var largestNumber = function(nums) {
    nums = nums.sort((a,b) => `${b}${a}` - `${a}${b}`).join("");
    
    return nums[0] == 0 ? "0" : nums;
};

module.exports = largestNumber;