/**
 * @author maneeshavenigalla
 * Given an integer array nums that may contain duplicates, return all possible subsets (the power set). The
 * solution set must not contain duplicate subsets. Return the solution in any order.
 * @param {number[]} nums
 * @return {number[][]}
 */
 var subsetsWithDup = function(nums) {
    let result = [];

    nums.sort((a, b) => a - b);

    const helper = (i, subset) => {
        if(i >= nums.length) {
            result.push([...subset]);
            return result;
        }

        subset.push(nums[i]);
        helper(i + 1, subset);
        subset.pop();

        while(i + 1 < nums.length && nums[i] == nums[i + 1]) {
            i++;
        }
        helper(i + 1, subset);
    }

    helper(0, []);
    return result;
};

module.exports = subsetsWithDup;