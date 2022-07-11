"use strict";

class Node {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

/**
 * solution 1 -- breadth-first traversal
 * time: O(n^2) -- due to array.shift() being O(n) time
 * space: O(1) -- no more than two nodes in queue at a time
 * 
 * @param {number} target
 * @param {Node} root
 * @returns {boolean}
 */
function search(target, root) {
    // handle null root case first
    if (root == null) return false;

    let queue = [root];

    while (queue.length > 0) {
        const currNode = queue.shift();

        if (currNode.value === target) return true;
        // else continue
        if (currNode.left !== null) queue.push(currNode.left);

        if (currNode.right !== null) queue.push(currNode.right);
    }

    return false;
}