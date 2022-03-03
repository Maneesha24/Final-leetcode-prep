/**
 * @author maneeshavenigalla
 * There is a robot on an m x n grid. The robot is initially located at the top-left corner 
 * (i.e., grid[0][0]). The robot tries to move to the bottom-right corner (i.e., grid[m - 1][n - 1]). 
 * The robot can only move either down or right at any point in time. Given the two integers m and n,
 * return the number of possible unique paths that the robot can take to reach the bottom-right corner.
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
 var uniquePaths = function(m, n) {

    let grid = new Array(m);

    for(let i = 0; i < m; i++) {
        grid[i] = new Array(n);

        for(let j = 0; j < n; j++) {
            if(i > 0 && j > 0) {
                grid[i][j] = grid[i - 1][j] + grid[i][j - 1];
            } else if(i == 0 && j > 0) {
                grid[i][j] = grid[i][j - 1];
            } else if(i > 0 && j == 0) {
                grid[i][j] = grid[i - 1][j];
            } else {
                grid[i][j] = 1;
            }
        }
    }

    return grid[m - 1][n - 1];
};

module.exports = uniquePaths;