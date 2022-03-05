/**
 * Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's, and return the matrix.
 * You must do it in place.
 * @param {number[][]} matrix
 * @return {number[][]}
 */

const setZeroes = (matrix) => {

    let rows = new Set();
    let columns = new Set();

    for(let i = 0; i < matrix.length; i++) {
        for(let j = 0; j < matrix[0].length; j++) {
            if(matrix[i][j] == 0) {
                rows.add(i);
                columns.add(j);
            }
        }
    }

    rows = [...rows];
    columns = [...columns];

    for(let i = 0; i < rows.length; i++) {
        for(let j = 0; j < matrix[0].length; j++) {
            matrix[rows[i]][j] = 0;
        }
    }

    for(let i = 0; i < matrix.length; i++) {
        for(let j = 0; j < columns.length; j++) {
            matrix[i][columns[j]] = 0;
        }
    }

    return matrix;

}
module.exports = setZeroes;