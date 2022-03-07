/**
 * @author maneeshavenigalla
 * You're given strings jewels representing the types of stones that are jewels, and stones representing the stones 
 * you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are
 * also jewels. Letters are case sensitive, so "a" is considered a different type of stone from "A".
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
 var numJewelsInStones = function(jewels, stones) {
    
    let charObj = {};

    for(const stone of stones) {
        if(stone in charObj) {
            charObj[stone] += 1;
        } else {
            charObj[stone] = 1;
        }
    }

    let result = 0;

    for(const jewel of jewels) {
        if(jewel in charObj) {
            result += charObj[jewel];
        }
    }

    return result;
};

module.exports = numJewelsInStones;