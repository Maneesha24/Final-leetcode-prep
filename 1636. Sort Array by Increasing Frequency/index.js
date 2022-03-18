/**
 * @author maneeshavenigalla
 * Given an array of integers nums, sort the array in increasing order based on the frequency of the
 * values. If multiple values have the same frequency, sort them in decreasing order. Return the sorted array.
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function (nums) {

    const frequencyMap = new Map();

    for (let num of nums) {
        if(frequencyMap.has(num)) {
            frequencyMap.set(num, frequencyMap.get(num) + 1);
        } else {
            frequencyMap.set(num, 1);
        }
    }
    return nums.sort((a, b) => frequencyMap.get(a) - frequencyMap.get(b) || b - a);
};


module.exports = frequencySort;