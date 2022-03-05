/**
 * Given an integer array nums and an integer k, return the k most frequent
 * elements. You may return the answer in any order.
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

 const topKFrequent = (nums, k) => {

    if (nums.length == 1) {
        return nums;
    }

    let charObj = {};

    for (const val of nums) {
        if (val in charObj) {
            charObj[val] += 1
        } else {
            charObj[val] = 1
        }
    }

    if (k == 1) {
        return [parseInt(Object.keys(charObj)[0])];
    } else {
        return Object.keys(charObj).sort((a, b) => charObj[b] - charObj[a]).map(val => parseInt(val)).slice(0, k);
    }

};

module.exports = topKFrequent;