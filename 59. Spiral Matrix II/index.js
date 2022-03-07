/**
 * @author maneesha venigalla
 * Given a positive integer n, generate an n x n matrix filled with elements from 1 to n2 in spiral order.
 * @param {number} n 
 * @return {number[]}
 */
const generateMatrix = (n) => {

    let startRow = 0;
    let endRow = n - 1;
    let startColumn = 0;
    let endColumn = n - 1;
    let count = 1;

    let result = [];
    for(let i = 0; i < n; i++) {
        result.push(new Array(n));
    }

    while(startRow <= endRow && startColumn <= endColumn) {
        for(let i = startColumn; i <= endColumn; i++) {
            result[startRow][i] = count;
            count++;
        }
        startRow++;

        for(let i = startRow; i <= endRow; i++) {
            result[i][endColumn] = count;
            count++;
        }
        endColumn--;

        if(startRow <= endRow) {
            for(let i = endColumn; i >= startColumn; i--) {
                result[endRow][i] = count;
                count++;
            }
        }
        endRow--;

        if(startColumn <= endColumn) {
            for(let i = endRow; i >= startRow; i--) {
                result[i][startColumn] = count;
                count++;
            }
        }
        startColumn++;
    }

    return result;
}

module.exports = generateMatrix;