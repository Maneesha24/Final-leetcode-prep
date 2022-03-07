/**
 * @author maneeshavenigalla
 * The complement of an integer is the integer you get when you flip all the 0's to 1's and all 
 * the 1's to 0's in its binary representation. Given an integer num, return its complement.
 * @param {number} num
 * @return {number}
 */
 var findComplement = function(num) {
    
    let binaryrep = num.toString(2).split('');

    for(let i = 0; i < binaryrep.length; i++) {
        if(binaryrep[i] == '0') {
            binaryrep[i] = '1'
        } else {
            binaryrep[i] = '0'
        }
    }

    return parseInt(binaryrep.join(''), 2);
};

module.exports = findComplement;