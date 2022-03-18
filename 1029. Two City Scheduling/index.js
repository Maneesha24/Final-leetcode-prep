/**
 * @author maneeshavenigalla
 * A company is planning to interview 2n people. Given the array costs where costs[i] = [aCosti, bCosti], the 
 * cost of flying the ith person to city a is aCosti, and the cost of flying the ith person to city b is bCosti. 
 * Return the minimum cost to fly every person to a city such that exactly n people arrive in each city.
 * @param {number[][]} costs
 * @return {number}
 */
 var twoCitySchedCost = function(costs) {

    let result = 0;
    costs.sort((a,b) => ((a[0] - a[1]) - (b[0] - b[1])));
    let n = costs.length/2;

    for(let i = 0; i < n; i++) {
        result += costs[i][0] + costs[i + n][1];
    }

    return result;
};

module.exports = twoCitySchedCost;