/**
 * @author maneesha venigalla
 * Given an m x n matrix, return all elements of the matrix
 * in spiral order.
 * @param {number[][]} matrix is the input matrix 
 * @return {number[]} is the array of the elements in spiral order
 */
const spiralOrder = (matrix) => {
    let result = [];

    let startRow = 0;
    let endRow = matrix.length - 1;
    let startColumn = 0;
    let endColumn = matrix[0].length - 1;


    while(startRow <= endRow && startColumn <= endColumn) {
        for(let i = startColumn; i <= endColumn; i++) {
            result.push(matrix[startRow][i]);
        }
        startRow++;

        for(let i = startRow; i <= endRow; i++) {
            result.push(matrix[i][endColumn]);
        }
        endColumn--;

        if(startRow <= endRow) {
            for(let i = endColumn; i >= startColumn; i--) {
                result.push(matrix[endRow][i]);
            }
        }
        endRow--;

        if(startColumn <= endColumn) {
            for(let i = endRow; i >= startRow; i--) {
                result.push(matrix[i][startColumn]);
            }
        }
        startColumn++;
    }

    return result;
}

module.exports = spiralOrder;