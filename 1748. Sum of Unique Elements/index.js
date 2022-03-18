/**
 * @author maneeshavenigalla
 * You are given an integer array nums. The unique elements of an array are the elements that appear exactly once in the
 * array. Return the sum of all the unique elements of nums.
 * @param {number[]} nums
 * @return {number}
 */
 var sumOfUnique = function(nums) {
    
    let numObj = {};
    let result = 0;

    for(const num of nums) {
        if(num in numObj) {
            if(numObj[num] == 1) {
                result -= num;
            }
            numObj[num] += 1
        } else {
            numObj[num] = 1
            result += num;
        }
    }

    return result;
};

module.exports = sumOfUnique;