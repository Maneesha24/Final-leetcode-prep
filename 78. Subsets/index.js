/**
 * @author maneeshavenigalla
 * Given an integer array nums of unique elements, return all possible subsets (the power set). The
 * solution set must not contain duplicate subsets. Return the solution in any order.
 * @param {number[]} nums
 * @return {number[][]}
 */
 var subsets = function(nums) {
    let result = [];

    let subset = [];

    const helper = (index) => {
        if(index >= nums.length) {
            result.push([...subset]);
            return result;
        }

        subset.push(nums[index]);
        helper(index + 1);

        subset.pop();
        helper(index + 1);
    }

    helper(0);
    return result;
};

module.exports = subsets;