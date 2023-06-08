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

/**
 * solution 1
 * time: O(n)
 * space: O(n)
 * 
 * @param {ListNode} linkedList 
 * @param {number} k 
 */
function searchKFromEnd(linkedList, k) {
    let nodes = [];
    let current = linkedList;

    while (current !== null) {
        // add each node to array
        nodes.push(current.data);
        // traverse to next node
        current = current.next;
    }

    if (k > nodes.length) return null;

    // pick kth to last node elem of array to return
    return nodes[nodes.length - k];
}

console.log( searchKFromEnd(a, 1) ); // Node d
