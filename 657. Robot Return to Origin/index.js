/**
 * @author maneeshavenigalla
 * There is a robot starting at the position (0, 0), the origin, on a 2D plane. Given a sequence of its moves,
 * judge if this robot ends up at (0, 0) after it completes its moves. You are given a string moves that represents
 * the move sequence of the robot where moves[i] represents its ith move. Valid moves are 'R' (right), 'L' (left), 
 * 'U' (up), and 'D' (down). Return true if the robot returns to the origin after it finishes all of its moves, or false otherwise.
 * @param {string} moves
 * @return {boolean}
 */
 var judgeCircle = function(moves) {
    
    let origin = [0,0];

    for(const move of moves){
        if(move == 'L') {
            origin[0] -= 1;
        } else if(move == 'R') {
            origin[0] += 1;
        } else if(move == 'U') {
            origin[1] += 1;
        } else if(move == 'D'){
            origin[1] -= 1;
        }
    }

    return origin[0] == 0 && origin[1] == 0;
};

module.exports = judgeCircle;