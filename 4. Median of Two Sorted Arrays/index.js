/**
 * @author maneeshavenigalla
 * Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the 
 * two sorted arrays. The overall run time complexity should be O(log (m+n)).
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
 var findMedianSortedArrays = function(nums1, nums2) {
    
    let total = nums1.length + nums2.length;
    let half = Math.floor(total/2);

    if(nums1.length > nums2.length) {
        [nums1, nums2] = [nums2, nums1];
    }
    
    let left = 0;
    let right = nums1.length - 1;

    while(true) {
        i = Math.floor((left + right)/2);
        j = half - i - 2;

        nums1left = i >= 0 ? nums1[i] : -Infinity;
        nums1right = i + 1 < nums1.length ? nums1[i + 1] : Infinity;
        nums2left = j >= 0 ? nums2[j] : -Infinity;
        nums2right = j + 1 < nums2.length ? nums2[j + 1] : Infinity;

        if(nums1left <= nums2right && nums2left <= nums1right) {
            if(total%2 != 0) {
                return Math.min(nums1right, nums2right)
            } else {
                return (Math.max(nums1left, nums2left) + Math.min(nums1right, nums2right))/2;
            }
        } else if (nums1left > nums2right) {
            right = i - 1;
        } else {
            left = i + 1;
        }
    }
};

module.exports = findMedianSortedArrays;