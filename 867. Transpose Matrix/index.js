/**
 * @author maneeshavenigalla
 * Given a 2D integer array matrix, return the transpose of matrix. The transpose of a matrix is
 * the matrix flipped over its main diagonal, switching the matrix's row and column indices.
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function (matrix) {

    let result = [];
    
    for(let i = 0; i < matrix[0].length; i++) {
        let arr = [];
        for(let j = 0; j < matrix.length; j++) {
            arr.push(matrix[j][i]);
        }
        result.push(arr);
    }

    return result;
};

module.exports = transpose;