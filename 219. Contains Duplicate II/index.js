/**
 * @author maneeshavenigalla
 * Given an integer array nums and an integer k, return true if there are two distinct indices i
 * and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
 var containsNearbyDuplicate = function(nums, k) {
    
    let numMap = {};
    
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] in numMap && i - numMap[nums[i]] <= k) {
            return true;
        } else {
            numMap[nums[i]] = i;
        }
    }
    
    return false;
};

module.exports = containsNearbyDuplicate;