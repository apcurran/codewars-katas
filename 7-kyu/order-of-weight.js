"use strict";

/**
 * solution 1
 * time: O(n * log n)
 * space: O(n)
 * 
 * @param {string[]} arr 
 * @returns {string[]}
 */
function arrange(arr) {
    let itemTuples = []; // tuple [item, totalGrams]

    for (let item of arr) {
        const [amount, unit] = item.match(/\D+|\d+/g);
        let totalGrams = Number(amount);

        if (unit === "KG") {
            totalGrams *= 1_000;
        } else if (unit === "T") {
            totalGrams *= 1_000_000;
        }

        itemTuples.push([item, totalGrams]);
    }

    itemTuples.sort(function sortAscByTotalWeight(tupleA, tupleB) {
        return tupleA[1] - tupleB[1];
    });

    return itemTuples.map(function getItemFromTuple(tuple) {
        return tuple[0];
    });
}

console.log(arrange(["200G","300G","150G","100KG"]));
// ["150G","200G","300G","100KG"]
