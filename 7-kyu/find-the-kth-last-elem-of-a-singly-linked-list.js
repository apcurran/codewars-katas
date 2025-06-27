"use strict";

// Predefined object for list nodes
function ListNode(data, next = null) {
    this.data = data;
    this.next = next;
}

/**
 * solution 1 -- iterative
 * time: O(n)
 * space: O(n)
 *
 * @param {ListNode} head
 * @param {number} k index from the end of the list
 * @returns {ListNode} node's data at the specified end index
 */
function getKthLastElement(head, k) {
    let values = [];

    while (head !== null) {
        values.push(head);
        head = head.next;
    }

    return values[values.length - k - 1];
}

const list = new ListNode(1, new ListNode(2, new ListNode(3)));
console.log(getKthLastElement(list, 0).data); // 3
console.log(getKthLastElement(list, 1).data); // 2
console.log(getKthLastElement(list, 2).data); // 1
