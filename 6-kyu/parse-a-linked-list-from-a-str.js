"use strict";

class ListNode {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

/**
 * solution 1
 * time: O(n)
 * space: O(n)
 * 
 * @param {string} str 
 * @returns {ListNode|null}
 */
function parse(str) {
    if (str === "null") return null;

    const chunks = str.split(" -> ");
    let nodesArr = [];

    for (let chunk of chunks) {
        if (chunk === "null") break;

        const value = Number(chunk);
        const node = new ListNode(value);
        nodesArr.push(node);
    }

    // do not continue if there is only ONE node
    if (nodesArr.length === 1) {
        return nodesArr[0];
    }

    let headRef = nodesArr[0];
    let head = nodesArr[0];

    for (let i = 0; i < nodesArr.length; i++) {
        const currentNode = nodesArr[i];
        head.next = currentNode;
        head = head.next;
    }
    
    return headRef;
}

console.log( parse("1 -> 2 -> 3 -> null") ); // Node(1) -> Node(2) -> Node(3) -> null
console.log( parse("1 -> null") ); // Node(1) -> null
