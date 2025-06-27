"use strict";

/**
 * solution 1 -- iterative
 * time: O(n)
 * space: O(1)
 *
 * @param {number} amount
 * @returns {number[]}
 */
function giveChange(amount) {
    let amountCopy = amount;
    let billsArr = [0, 0, 0, 0, 0, 0];

    while (amountCopy) {
        if (amountCopy >= 100) {
            // divide by 100
            const billsCount = Math.floor(amountCopy / 100);
            // update billsArr
            billsArr[5] = billsCount;

            // update new amount
            const revisedAmountCopy = amountCopy - billsCount * 100;
            amountCopy = revisedAmountCopy;
        } else if (amountCopy >= 50) {
            const billsCount = Math.floor(amountCopy / 50);
            billsArr[4] = billsCount;

            const revisedAmountCopy = amountCopy - billsCount * 50;
            amountCopy = revisedAmountCopy;
        } else if (amountCopy >= 20) {
            const billsCount = Math.floor(amountCopy / 20);
            billsArr[3] = billsCount;

            const revisedAmountCopy = amountCopy - billsCount * 20;
            amountCopy = revisedAmountCopy;
        } else if (amountCopy >= 10) {
            const billsCount = Math.floor(amountCopy / 10);
            billsArr[2] = billsCount;

            const revisedAmountCopy = amountCopy - billsCount * 10;
            amountCopy = revisedAmountCopy;
        } else if (amountCopy >= 5) {
            const billsCount = Math.floor(amountCopy / 5);
            billsArr[1] = billsCount;

            const revisedAmountCopy = amountCopy - billsCount * 5;
            amountCopy = revisedAmountCopy;
        } else if (amountCopy >= 1) {
            const billsCount = Math.floor(amountCopy / 1);
            billsArr[0] = billsCount;

            const revisedAmountCopy = amountCopy - billsCount * 1;
            amountCopy = revisedAmountCopy;
        }
    }

    return billsArr;
}

console.log(giveChange(365)); // [0,1,1,0,1,3]
console.log(giveChange(217)); // [2,1,1,0,0,2]
