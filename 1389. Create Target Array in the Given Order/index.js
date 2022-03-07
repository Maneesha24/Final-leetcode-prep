/**
 * @author maneeshavenigalla
 * Given two arrays of integers nums and index. Your task is to create target array under the following rules:
 * Initially target array is empty.
 * From left to right read nums[i] and index[i], insert at index index[i] the value nums[i] in target array.
 * Repeat the previous step until there are no elements to read in nums and index. Return the target array.
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
 var createTargetArray = function(nums, index) {
    
    let result = [];

    for(let i = 0;i < index.length; i++) {
        result = result.slice(0, index[i]).concat(nums[i]).concat(result.slice(index[i]));
    }
    return result;
};

module.exports = createTargetArray;