/**
 * @author maneesha venigalla
 * Given a positive integer, check whether it has alternating bits: namely, if two adjacent
 * bits will always have different values.
 * @param {number} n
 * @return {boolean}
 */
 var hasAlternatingBits = function(n) {
    
    let binary = n.toString(2);

    for(let i = 0; i < binary.length; i++) {
        if(i >= 0 && binary[i] == binary[i + 1]) {
            return false;
        }
    }

    return binary;
};

module.exports = hasAlternatingBits;