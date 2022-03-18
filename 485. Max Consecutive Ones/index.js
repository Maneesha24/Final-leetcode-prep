/**
 * @author maneeshavenigalla
 * Given a binary array nums, return the maximum number of consecutive 1's in the array.
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {

    let max = 0;

    let i = 0;
    while(i < nums.length) {
        let count = nums[i] == 0 ? 0 : 1;
        let j = i + 1;

        if(nums[i] == 1) {
            while(j < nums.length && nums[i] == nums[j]) {
                j++;
                count++;
            }
        }


        max = Math.max(count, max);
        i = j;
    }

    return max;
};

module.exports = findMaxConsecutiveOnes;