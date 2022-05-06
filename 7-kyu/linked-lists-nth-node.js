"use strict";

function ListNode(data) {
    this.data = data;
    this.next = null;
}

const a = new ListNode(1);
const b = new ListNode(2);
const c = new ListNode(3);

a.next = b;
b.next = c;

// /**
//  * solution 1 -- iterative
//  * time: O(n)
//  * space: O(1)
//  * 
//  * @param {ListNode} node 
//  * @param {number} index
//  * @returns {ListNode}
//  */
// function getNth(node, index) {
//     let current = node;
//     let indexCounter = 0;

//     while (current !== null) {
//         if (indexCounter === index) return current;

//         // incr counter
//         indexCounter++;
//         // move pointer to next node
//         current = current.next;
//     }

//     throw new Error("No valid index given");
// }

/**
 * solution 2 -- recursive
 * time: O(n)
 * space: O(n)
 * 
 * @param {ListNode} node 
 * @param {number} index
 * @returns {ListNode}
 */
function getNth(node, index) {
    if (node === null) throw new Error("No valid index given");

    if (index === 0) return node;

    return getNth(node.next, index - 1);
}

console.log( getNth(a, 0) ); // node with data = 1
console.log( getNth(a, 5) ); // error
console.log( getNth(d, 5) ); // error
