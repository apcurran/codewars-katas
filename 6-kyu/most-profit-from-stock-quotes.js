/**
 * solution 1
 * time: O(n)
 * space: O(1)
 *
 * @param {number[]} quotes
 * @returns {number} - max profit total
 */
function getMostProfitFromStockQuotes(quotes) {
    if (!Array.isArray(quotes)) {
        return 0;
    }

    let totalProfit = 0;
    let maxFuturePrice = quotes.at(-1);

    for (let i = quotes.length - 2; i >= 0; i--) {
        const currentPrice = quotes[i];

        if (currentPrice < maxFuturePrice) {
            // buy and sell at max future price day
            totalProfit += maxFuturePrice - currentPrice;
        } else {
            maxFuturePrice = currentPrice;
        }
    }

    return totalProfit;
}

console.log(getMostProfitFromStockQuotes([1, 2, 3, 4, 5, 6])); // 15
console.log(getMostProfitFromStockQuotes([6, 5, 4, 3, 2, 1])); // 0
console.log(getMostProfitFromStockQuotes([1, 6, 5, 10, 8, 7])); // 18
console.log(getMostProfitFromStockQuotes([1, 2, 10, 3, 2, 7, 3, 2])); // 26
