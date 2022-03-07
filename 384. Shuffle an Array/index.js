/**
 * @author maneeshavenigalla
 * Given an integer array nums, design an algorithm to randomly shuffle the array. All
 * permutations of the array should be equally likely as a result of the shuffling. Implement
 * the solution class:
 * Initializes the object with the integer array nums.
 * @param {number[]} nums
 */
class Solution {
    constructor(nums) {
        this.numsArr = nums;
    }

    /**
     * Resets the array to its original configuration and return it.
     * @return {number[]}
     */
    reset() {
        return this.numsArr;
    }

    /**
     * Returns a random shuffling of the array.
     * @return {number[]}
     */
    shuffle() {

        let shuffled = [...this.numsArr];

        const len = shuffled.length;

        for (let i = 0; i < len; i++) {
            let rand = Math.floor(Math.random() * shuffled.length);
            [shuffled[i], shuffled[rand]] = [shuffled[rand], shuffled[i]]
        }
        return shuffled;
    }

};


module.exports = Solution;