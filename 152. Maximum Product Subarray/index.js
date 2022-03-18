/**
 * @author maneeeshavenigalla
 * Given an integer array nums, find a contiguous non-empty subarray within the array that has the largest product,
 * and return the product. The test cases are generated so that the answer will fit in a 32-bit integer.A subarray
 * is a contiguous subsequence of the array.
 * @param {number[]} nums
 * @return {number}
 */
 var maxProduct = function(nums) {

    let result = nums[0];
    let prevMax = nums[0];
    let prevMin = nums[0];

    for(let i = 1; i < nums.length; i++) {
        let currentMax = Math.max(nums[i] * prevMax, nums[i], nums[i] * prevMin);
        let currentMin = Math.min(nums[i] * prevMin, nums[i], nums[i] * prevMax);

        prevMax = currentMax;
        prevMin = currentMin;

        result = Math.max(result, prevMax)
    }

    return result;
};

module.exports = maxProduct;