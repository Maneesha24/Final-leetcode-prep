/**
 * @author maneeshavenigalla
 * Given a m x n matrix grid which is sorted in non-increasing order both row-wise and column-wise, return the number of negative numbers in grid.
 * @param {number[][]} grid
 * @return {number}
 */
 var countNegatives = function(grid) {
    
    let i = grid.length - 1;
    let j = 0;

    let result = 0;

    while(i >= 0 && j < grid[0].length) {
        if (grid[i][j] >= 0) {
            j++;
          } else {
            result += grid[0].length - j;
            i--;
        }
    }

    return result;
};

module.exports = countNegatives;