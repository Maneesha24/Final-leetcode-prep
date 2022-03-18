/**
 * @author maneesha venigalla
 * Given an array nums of n integers where nums[i] is in the range [1, n],
 * return an array of all the integers in the range [1, n] that do not appear in nums.
 * @param {number[]} nums
 * @return {number[]}
 */
const findDisappearedNumbers = (nums) => {
    let n = nums.length;

    nums = new Set(nums);

    let result = [];

    for(let i = 1; i <= n; i++) {
        if(!(nums.has(i))) {
            result.push(i);
        }
    }

    return result;
}

module.exports = findDisappearedNumbers;