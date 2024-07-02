"use strict";

/**
 * solution 1
 * n = arr length
 * m = friend status phrase length
 * time: O(n)
 * space: O(m) -- copy of friend status phrase with string.toLowerCase() call
 * 
 * @param {[number, string][]} arr 
 * @returns {number}
 */
function bearDollars(arr) {
    let total = 0;

    for (let [hours, friendStatus] of arr) {
        const friendStatusLower = friendStatus.toLowerCase();
        let clientAmount = hours;

        if (friendStatusLower === "close friend") {
            clientAmount *= 25;
        } else if (friendStatusLower === "friend") {
            clientAmount *= 50;
        } else if (friendStatusLower === "acquaintance") {
            clientAmount *= 100;
        } else {
            clientAmount *= 125;
        }

        total += clientAmount;
    }

    return total;
}

console.log(bearDollars([[10, "Close Friend"], [3, "Acquaintance"], [7, "Lead from web"], [6, "Friend"], [2, "From advertisements"]]));
// 1975
