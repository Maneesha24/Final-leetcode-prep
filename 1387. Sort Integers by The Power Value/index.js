/**
 * @author maneesha venigalla
 * Given three integers lo, hi and k. The task is to sort all integers in the interval [lo, hi] by the
 * power value in ascending order, if two or more integers have the same power value sort them by ascending order.
 * Return the k-th integer in the range [lo, hi] sorted by the power value.
 * @param {number} lo
 * @param {number} hi
 * @param {number} k 
 * @return {number}
 */
 const getKth = (lo, hi, k) => {

    let powerObj = {};

    for(let i = lo; i <= hi; i++) {
        powerObj[i] = getPower(i);
    }

    let result = Object.keys(powerObj).sort((a, b) => powerObj[a] - powerObj[b]);
    return parseInt(result[k - 1]);
}   

const getPower = (num) => {
    let count = 0;
    
    while(num > 1) {
        if(num%2 == 0) {
            num = num/2;
        } else {
            num = 3 * num + 1;
        }
        count++;
    }

    return count;
}

module.exports = getKth;