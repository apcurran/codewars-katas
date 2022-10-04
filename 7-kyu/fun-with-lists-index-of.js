"use strict";

function ListNode(data, next = null) {
    this.data = data;
    this.next = next;
}

/**
 * solution 1 -- iterative
 * time: O(n)
 * space: O(1)
 * 
 * @param {ListNode} head 
 * @param {number} value index 
 * @returns {number}
 */
function indexOf(head, value) {
    let currIndex = 0;
    let curr = head;

    while (curr !== null) {
        // check node val
        if (curr.data === value) {
            return currIndex;
        }

        // bump up index counter
        currIndex++;
        // traverse
        curr = curr.next;
    }

    return -1;
}

const a = new ListNode(1);
const b = new ListNode(2);
const c = new ListNode(3);
const d = new ListNode(3);

a.next = b;
b.next = c;
c.next = d;

console.log( indexOf(a, 3) ); // 2
console.log( indexOf(null, 17) ); // -1
