"use strict";

/**
 * solution 1
 * time: O(1)
 * space: O(1)
 *
 * @param {number} cents
 * @returns {{
 *  "Nickels": number,
 *  "Pennies": number,
 *  "Dimes": number,
 *  "Quarters": number
 * }}
 */
function looseChange(cents) {
    let change = {
        Nickels: 0,
        Pennies: 0,
        Dimes: 0,
        Quarters: 0,
    };

    if (cents <= 0) {
        return change;
    }

    let flooredCents = Math.floor(cents);

    if (flooredCents / 25 >= 1) {
        // divide
        const quartersCount = Math.floor(flooredCents / 25);
        change.Quarters += quartersCount;
        // get remainder
        flooredCents = flooredCents % 25;
    }

    if (flooredCents / 10 >= 1) {
        const dimesCount = Math.floor(flooredCents / 10);
        change.Dimes += dimesCount;
        flooredCents = flooredCents % 10;
    }

    if (flooredCents / 5 >= 1) {
        const nickelsCount = Math.floor(flooredCents / 5);
        change.Nickels += nickelsCount;
        flooredCents = flooredCents % 5;
    }

    if (flooredCents / 1 >= 1) {
        const penniesCount = Math.floor(flooredCents / 1);
        change.Pennies += penniesCount;
        flooredCents = flooredCents % 1;
    }

    return change;
}

console.log(looseChange(56)); // {'Nickels': 1, 'Pennies': 1, 'Dimes': 0, 'Quarters': 2}
