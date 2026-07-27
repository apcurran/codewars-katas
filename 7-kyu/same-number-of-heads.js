/**
 * solution 1 -- math
 * time: O(n)
 * space: O(n)
 * @param {number[]} coins
 * @param {number} k
 * @returns {[number[], number[]]}
 */
function splitCoins(coins, k) {
    // get k coins for group A
    // flip them so heads become tails, and tails become heads
    const groupA = coins.slice(0, k).map(function flipAll(coin) {
        return coin.flip();
    });
    // get remaining n - k coins for group b
    // from k to end of the coins arr
    const groupB = coins.slice(k);

    return [groupA, groupB];
}
