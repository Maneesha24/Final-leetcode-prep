/**
 * @author maneesha venigalla
 * A transaction is possibly invalid if:
 * the amount exceeds $1000, or;
 * if it occurs within (and including) 60 minutes of another transaction with the same name in a different city.
 * You are given an array of strings transaction where transactions[i] consists of comma-separated values representing the
 * name, time (in minutes), amount, and city of the transaction. Return a list of transactions that are possibly invalid. You 
 * may return the answer in any order.
 * @param {string[]} transactions is the input transactions
 * @return {string[]} is the resultant invalid transactions
 */
const invalidTransactions = (transactions) => {

    let result = [];
    let added = new Array(transactions.length).fill(false);

    for(let i = 0; i < transactions.length; i++) {
        let [name1, time1, amount1, city1] = transactions[i].split(',');

        if(!added[i] && amount1 > 1000) {
            result.push(transactions[i]);
            added[i] = true;
        }

        for(let j = i + 1; j < transactions.length; j++) {
            let [name2, time2, amount2, city2] = transactions[j].split(',');

            if(name1 == name2 && city1 != city2 && Math.abs(time1 - time2) <= 60) {
                if(!added[j]) {
                    result.push(transactions[j]);
                    added[j] = true;
                }

                if(!added[i]) {
                    result.push(transactions[i]);
                    added[i] = true;
                }
            }
        }
    }

    return result;
}

module.exports = invalidTransactions;