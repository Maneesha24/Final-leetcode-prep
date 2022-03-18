/**
 * @author maneeshavenigalla
 * Implement the NumArray class:
 * NumArray(int[] nums) Initializes the object with the integer array nums.
 * @param {number[]} nums
 */
class NumArray {
    constructor(nums) {
        let curr = 0
        this.dp = nums.map((el) => curr += el)
    }

    /** 
     * Returns the sum of the elements of nums between indices left and right
     * inclusive (i.e. nums[left] + nums[left + 1] + ... + nums[right]).
     * @param {number} left 
     * @param {number} right
     * @return {number}
     */
    sumRange = function (left, right) {
        return this.dp[right] - (this.dp[left - 1] ? this.dp[left - 1] : 0)
    };
};
/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */

module.exports = NumArray;