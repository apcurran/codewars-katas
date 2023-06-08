"use strict";

class ListNode {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

const a = new ListNode("a");
const b = new ListNode("b");
const c = new ListNode("c");
const d = new ListNode("d");

a.next = b;
b.next = c;
c.next = d;

// /**
//  * solution 1 -- iterative
//  * time: O(n)
//  * space: O(n)
//  * 
//  * @param {ListNode} linkedList 
//  * @param {number} k 
//  */
// function searchKFromEnd(linkedList, k) {
//     let nodes = [];
//     let current = linkedList;

//     while (current !== null) {
//         // add each node to array
//         nodes.push(current.data);
//         // traverse to next node
//         current = current.next;
//     }

//     if (k > nodes.length) return null;

//     // pick kth to last node elem of array to return
//     return nodes[nodes.length - k];
// }

/**
 * solution 1 -- recursive
 * time: O(n)
 * space: O(n)
 * 
 * @param {ListNode} linkedList 
 * @param {number} k 
 */
function searchKFromEnd(linkedList, k) {
    const nodeValues = recurse(linkedList, []);
    
    if (k > nodeValues.length) return null;

    // pick kth to last node elem of array to return
    return nodeValues[nodeValues.length - k];
}

/**
 * 
 * @param {ListNode} head 
 * @param {string[]} nodeValues
 * @returns {string[]}
 */
function recurse(head, nodeValues) {
    if (head === null) return nodeValues;

    // add current value to list
    nodeValues.push(head.data);
    // continue to next node
    return recurse(head.next, nodeValues);
}

console.log( searchKFromEnd(a, 1) ); // "d"
