/**
 * @author maneesha venigalla
 * Given a non-empty array of decimal digits representing a non-negative integer, increment one
 * to the integer. The digits are stored such that the most significant digit is at the head of
 * the list, and each element in the array contains a single digit. You may assume the integer does
 * not contain any leading zero, except the number 0 itself.
 * @param {number[]} digits is the input array 
 * @return {number[]} is the resultant array after adding 1 to the input array
 */
const plusOne = (digits) => {

    let nums1 = digits;
    let nums2 = [1];
    let sum = 0;
    let carry = 0;

    let result = [];

    while(nums1.length || nums2.length || sum > 0) {
        if(nums1.length) {
            sum += nums1.pop();
        }

        if(nums2.length) {
            sum += nums2.pop();
        }

        carry = Math.floor(sum/10);
        sum = sum%10;

        result.unshift(sum);

        sum = carry;
        carry = 0;
    }

    return result;
}

module.exports = plusOne;