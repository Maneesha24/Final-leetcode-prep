/**
 * @author maneeshavenigalla
 * Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could
 * represent. Return the answer in any order. A mapping of digit to letters (just like on the telephone buttons) is given
 * below. Note that 1 does not map to any letters.
 * @param {string} digits
 * @return {string[]}
 */
 var letterCombinations = function(digits) {

    const digitsChar = {
        2: 'abc',
        3: 'def',
        4: 'ghi',
        5: 'jkl',
        6: 'mno',
        7: 'pqrs',
        8: 'tuv',
        9: 'wxyz'
    }
    
    let result = [];

    const dfs = (index, currentStr) => {
        if(currentStr.length == digits.length) {
            
            result.push(currentStr);
            return;
        }

        for(let char of digitsChar[digits[index]]) {
            dfs(index + 1, currentStr + char);
        }
    }

    if(digits.length > 0) {
        dfs(0, "");
        return result;
    } else {
        return [];
    }
};

module.exports = letterCombinations;