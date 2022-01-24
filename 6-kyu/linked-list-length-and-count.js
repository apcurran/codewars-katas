"use strict";

function ListNode(data) {
    this.data = data;
    this.next = null;
}

/**
 * Time: O(n)
 * Space: O(1)
 * 
 * @param {ListNode} head
 * @returns {number}
 */
function length(head) {
    let current = head;
    let listLength = 0;

    while (current !== null) {
        // Increm length by 1
        listLength++;
        // Travel to next node in linked list
        current = current.next;
    }

    return listLength;
}

/**
 * Time: O(n)
 * Space: O(1)
 * 
 * @param {ListNode} head 
 * @param {number} dataTarget
 * @returns {number}
 */
function count(head, dataTarget) {
    let current = head;
    let dataTargetCount = 0;

    while (current !== null) {
        if (current.data === dataTarget) {
            dataTargetCount++;
        }

        // Travel to next node
        current = current.next;
    }

    return dataTargetCount;
}

const a = new ListNode(1);
const b = new ListNode(2);
const c = new ListNode(3);

a.next = b;
b.next = c;


console.log( length(a, 1) ); // 3
console.log( count(a, 1) ); // 1
