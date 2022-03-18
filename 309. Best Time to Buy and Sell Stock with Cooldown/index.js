/**
 * @author maneeshavenigalla
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
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
            let sell = dfs(i + 2, 0) + prices[i];
            let noSell = dfs(i + 1, 1);

            map[`${i}-${canBuy}`] = Math.max(sell, noSell);
        }
        return map[`${i}-${canBuy}`];
    };

    return dfs(0, 0);
};

module.exports = maxProfit;