/**
 * @author maneeshavenigalla
 * Given an array of integers nums sorted in non-decreasing order, find the starting and ending position
 * of a given target value. If target is not found in the array, return [-1, -1]. You must write an algorithm
 * with O(log n) runtime complexity.
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {

    if(nums.length == 1 && nums[0] == target) {
        return [0,0];
    }

    let left = 0;
    let right = nums.length - 1;
    let current = -1;

    while(left <= right) {
        let mid = Math.floor((left + right)/2);

        if(nums[mid] == target) {
            left = mid;
            right = mid;
            current = mid;
            break;
        } else if (nums[mid] > target) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    while(nums[left - 1] == target) {
        left--;
    }

    while(nums[right + 1] == target) {
        right++;
    }

    if(current == -1) {
        return [-1,-1];
    }

    return [left, right];
};

module.exports = searchRange;