/**
 * @author maneeshavenigalla
 * Write a program to solve a Sudoku puzzle by filling the empty cells. 
 * A sudoku solution must satisfy all of the following rules:
 * Each of the digits 1-9 must occur exactly once in each row.
 * Each of the digits 1-9 must occur exactly once in each column.
 * Each of the digits 1-9 must occur exactly once in each of the 9 3x3 sub-boxes of the grid.
 * The '.' character indicates empty cells.
 * @param {character[][]} board
 * @return {character[][]}
 */
var solveSudoku = function (board) {

    for(let i = 0; i < board.length; i++) {
        for(let j = 0; j < board.length; j++) {
            if(board[i][j] == '.') {
                for(let k = 1; k <= 9; k++) {
                    let char = k.toString();

                    if(isValid(board, i, j, char)) {
                        board[i][j] = char;

                        if(solveSudoku(board)) {
                            return board;
                        }
                        board[i][j] = '.';
                    }
                }
                return false;
            }
        }  
    }

    return board;
};

const isValid = (board, row, col, char) => {

    for(let i = 0; i < board.length; i++) {
        if(board[row][i] == char || board[i][col] == char ||
            board[3 * Math.floor(row/3) + Math.floor(i/3)][3 * Math.floor(col/3) + (i%3)] == char) {
            return false;
        }
    }

    return true;
}


module.exports = solveSudoku;