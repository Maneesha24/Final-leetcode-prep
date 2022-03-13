/**
 * @author maneeshavenigalla
 * Given a string s, you can transform every letter individually to be lowercase or uppercase to create
 * another string. Return a list of all possible strings we could create. Return the output in any order.
 * @param {string} s
 * @return {string[]}
 */
 var letterCasePermutation = function(s) {
    
    let result = [];

    const backtrack = (i, str) => {
        if(i == s.length) {
            result.push(str);
            return result;
        }

        backtrack(i + 1, str + s[i].toLowerCase());

        if(/[a-zA-Z]/.test(s[i])) {
            backtrack(i + 1, str + s[i].toUpperCase()); 
        }
    };

    backtrack(0, '');
    return result;
};

module.exports = letterCasePermutation;