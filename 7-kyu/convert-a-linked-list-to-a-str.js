"use strict";

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

/**
 * Solution 1
 * time: O(n)
 * space: O(n)
 *
 * @param {Node} list
 * @returns {string}
 */
function stringify(list) {
    let current = list;
    let resStr = "";

    while (current !== null) {
        resStr += `${current.data} -> `;
        current = current.next;
    }

    // Add last null pointer
    resStr += "null";

    return resStr;
}

const myList = new Node(1, new Node(2, new Node(3)));
console.log(myList);
console.log(stringify(myList)); // "1 -> 2 -> 3 -> null"
