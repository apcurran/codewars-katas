"use strict";

/**
 * solution 1 -- recursion
 * 
 * @param {object} data 
 * @returns {number[]}
 */
function extractIds(data) {
    let results = [];
    // check for empty data obj
    if (!data || Object.keys(data).length === 0) return results;

    // if the data obj has an id prop, add this id to result array
    if (data.id) {
        results.push(data.id);
    }

    // check for items prop
    if (data.items) {
        recursiveIdCheck(data.items);
    }

    return results;

    /**
     * side-effect addition of id values to results array in parent function
     * 
     * @param {object[]} items
     * @returns {void}
     */
    function recursiveIdCheck(items) {
        // base case
        if (items.length === 0) return;

        // recursive case
        /** @type {object} item */
        for (let item of items) {
            if (item.id) {
                results.push(item.id);
            }

            if (item.items) {
                recursiveIdCheck(item.items);
            }
        }
    }
}

const data1 = {
    id: 1,
    items: [
        { id: 2 },
        { id: 3 }
    ]
};
const data2 = {
    id: 1,
    items: [
        { id: 2 },
        {
            id: 3, items: [
                { id: 4 },
                { id: 5 }
            ]
        }
    ]
};
const data3 = {
    id: 1,
    items: [{
        id: 2,
        items: [{
            id: 3,
            items: [
                { id: 4 },
                { id: 5 }
            ]
        }, {
            id: 6,
            items: [{ id: 7 }]
        }]
    }]
};

console.log( extractIds({}) ); // []
console.log( extractIds(data1) ); // [1, 2, 3]
console.log( extractIds(data2) ); // [1, 2, 3, 4, 5]
console.log( extractIds(data3) ); // [1, 2, 3, 4, 5, 6, 7]

