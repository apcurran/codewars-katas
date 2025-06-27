"use strict";

/**
 * solution 1 -- iterative
 * time: O(n)
 * space: O(n)
 *
 * @param {object} list
 * @returns {number[]}
 */
function listToArray(list) {
    let results = [];
    let currentNode = list;

    while (currentNode !== null) {
        // read current node value
        results.push(currentNode.value);
        // traverse to next node
        currentNode = currentNode.next;
    }

    return results;
}
