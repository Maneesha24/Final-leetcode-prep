/**
 * @author maneeshavenigalla
 * Let's call an array arr a mountain if the following properties hold:
 * arr.length >= 3
 * There exists some i with 0 < i < arr.length - 1 such that:
 * arr[0] < arr[1] < ... arr[i-1] < arr[i]
 * arr[i] > arr[i+1] > ... > arr[arr.length - 1]
 * Given an integer array arr that is guaranteed to be a mountain, return any i such that
 * arr[0] < arr[1] < ... arr[i - 1] < arr[i] > arr[i + 1] > ... > arr[arr.length - 1].
 * @param {number[]} nums 
 * @return {number}
 */

 const peakIndexInMountainArray = (nums) => {
    let left = 0;
    let right = nums.length - 1;

    while(left < right) {
        let mid = Math.floor((left + right)/2);

        if(nums[mid] > nums[mid + 1]) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }

    return left;
};

module.exports = peakIndexInMountainArray;