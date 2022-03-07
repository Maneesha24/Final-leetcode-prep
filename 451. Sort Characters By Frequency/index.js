/**
 * @author maneesha venigalla
 * Given a string s, sort it in decreasing order based on the frequency of
 * characters, and return the sorted string.
 * @param {string} s is the input string
 * @return {string} is the resultant sorted string
 */
 const frequencySort = (s) => {

    let sObj = convertToObj(s);
    let result = '';

    Object.keys(sObj).sort((a,b) => {
        if(sObj[a] == sObj[b]) {
            return a > b ? 1 : -1;
        }

        return sObj[b] - sObj[a];
    }).map((val) =>  result += val.repeat(sObj[val])); 

    return result; 
}

const convertToObj = (str) => {

    let charObj = {};

    for (const val of str) {
        if (val in charObj) {
            charObj[val] += 1
        } else {
            charObj[val] = 1
        }
    }

    return charObj;
}

module.exports = frequencySort;