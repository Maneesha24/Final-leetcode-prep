/**
 * @author maneesha venigalla
 * Given an array of integers nums which is sorted in ascending order, and an integer target,
 * write a function to search target in nums. If target exists, then return its index. Otherwise,
 * return -1. You must write an algorithm with O(log n) runtime complexity.
 * @param {number} nums is the input array
 * @param {number} target is the element to match in the array
 * @return {number[]} is the index where the element is found in the array
 */
const search = (nums, target) => {

    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {

        let mid = Math.floor((left + right) / 2);

        if (nums[mid] == target) {
            return mid;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return -1;
}

module.exports = search;