/**
 * solution 1
 * time: O(n)
 * space: O(n)
 *
 * @param {string} text
 * @returns {number}
 */
function sumAccounts(text) {
    const dollarAmounts = text.match(/-?\$\d+/g) || [];

    return dollarAmounts.reduce(function sumDollarAmounts(sum, currentValue) {
        const amount = currentValue.replace("$", "");

        return sum + Number(amount);
    }, 0);
}

console.log(
    sumAccounts(
        "Hashim the greengrocer: $200. Prince Enki -$300. Barley Bee:-$100, promised to pay next week.",
    ),
); // -200
