/**
 * @author maneeshavenigalla
 * You are given an array prices where prices[i] is the price of a given stock on the ith day, and an
 * integer fee representing a transaction fee. Find the maximum profit you can achieve. You may complete
 * as many transactions as you like, but you need to pay the transaction fee for each transaction. Note: You
 * may not engage in multiple transactions simultaneously (i.e., you must sell the stock before you buy again).
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
 var maxProfit = function(prices, fee) {
    let map = {};

    const dfs = (i, canBuy) => {

        if (i >= prices.length) {
            return 0;
        }

        if (map[`${i}-${canBuy}`]) {
            return map[`${i}-${canBuy}`];
        }

        if (canBuy == 0) {
            let buy = dfs(i + 1, 1) - prices[i];
            let noBuy = dfs(i + 1, 0);

            map[`${i}-${canBuy}`] = Math.max(buy, noBuy);
        } else {
            let sell = dfs(i + 1, 0) + prices[i] - fee;
            let noSell = dfs(i + 1, 1);

            map[`${i}-${canBuy}`] = Math.max(sell, noSell);
        }
        return map[`${i}-${canBuy}`];
    };

    return dfs(0, 0); 
};

module.exports = maxProfit;