/**
 * @author maneeshavenigalla
 * Write an efficient algorithm that searches for a value target in an m x n integer matrix matrix. This 
 * matrix has the following properties: 
 * Integers in each row are sorted from left to right.
 * The first integer of each row is greater than the last integer of the previous row.
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
 var searchMatrix = function(matrix, target) {
    
    let left = 0;
    let right = matrix[0].length - 1;

    while(left < matrix.length && right >= 0) {
        if(matrix[left][right] == target) {
            return true;
        } else if (matrix[left][right] < target) {
            left++;
        } else {
            right--;
        }
    }

    return false;
};

module.exports = searchMatrix;