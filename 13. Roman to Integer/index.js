/**
 * @author maneesha venigalla
 * Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.
 * Given a roman numeral, convert it to an integer.
 * @param {string} s is the input string 
 * @return {number} is the resultant integer 
 */
 const romanToInt = (s) => {

    const romanObj = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    let i = 0;
    let result = 0;

    while(i < s.length) {
        if((i + 1 < s.length) && romanObj[s[i]] < romanObj[s[i + 1]]) {
            result += romanObj[s[i + 1]] - romanObj[s[i]];
            i = i + 2;
        } else {
            result += romanObj[s[i]];
            i++;
        }
    }

    return result;
}

module.exports = romanToInt;