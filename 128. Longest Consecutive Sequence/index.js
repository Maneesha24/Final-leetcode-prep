/**
 * @author maneeshavenigalla
 * Given an unsorted array of integers nums, return the length of the longest consecutive elements 
 * sequence. You must write an algorithm that runs in O(n) time.
 * @param {number[]} nums
 * @return {number}
 */
 var longestConsecutive = function(nums) {
    
    let numSet = new Set(nums);
    let maxLength = 0;

    for(const num of nums) {
        if(!numSet.has(num - 1)) {
            let current = num + 1;
            let count = 1;

            while(numSet.has(current)) {
                current++;
                count++;
            }

            maxLength = Math.max(maxLength, count);
            count = 1;
        }
    }   

    return maxLength;
};

module.exports = longestConsecutive;