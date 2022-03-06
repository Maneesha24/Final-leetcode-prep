/**
 * @author maneeshavenigalla
 * Given an integer array nums, move all the even integers at the beginning of the array followed by all
 * the odd integers. Return any array that satisfies this condition.
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function (nums) {

    let even = nums.filter(val => val%2 == 0);
    let odd = nums.filter(val => val%2 != 0);

    return [...even, ...odd];
};

module.exports = sortArrayByParity;