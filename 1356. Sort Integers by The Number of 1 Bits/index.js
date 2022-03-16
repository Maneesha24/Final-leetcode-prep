/**
 * @author maneeshavenigalla
 * You are given an integer array arr. Sort the integers in the array in ascending order by the number of 1's 
 * in their binary representation and in case of two or more integers have the same number of 1's you have to 
 * sort them in ascending order. Return the array after sorting it.
 * @param {number[]} arr
 * @return {number[]}
 */
 var sortByBits = function(arr) {

    return arr.sort((a, b) => {
        if(getBits(a) == getBits(b)) {
            return a > b ? 1 : -1;
        }

        return getBits(a) - getBits(b);
    });
};


const getBits = (val) => {
    return val.toString(2).replace(/0/g,'').length;
}

module.exports = sortByBits;