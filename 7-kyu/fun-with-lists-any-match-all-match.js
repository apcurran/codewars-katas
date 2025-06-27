"use strict";

function ListNode(data, next = null) {
    this.data = data;
    this.next = next;
}

/**
 * solution 1
 * time: O(n)
 * space: O(1)
 *
 * @param {ListNode} head
 * @param {function} func
 * @returns {boolean}
 */
function anyMatch(head, func) {
    // for each node in list
    while (head !== null) {
        const isMatch = func(head.data);
        // check if current node passes the testing func
        // if yes, return true
        if (isMatch) return true;
        // otherwise keep checking
        head = head.next;
    }

    return false;
}

/**
 * solution 1
 * time: O(n)
 * space: O(1)
 *
 * @param {ListNode} head
 * @param {function} func
 * @returns {boolean}
 */
function allMatch(head, func) {
    while (head !== null) {
        // compare values and return true if both are equal
        const hasPassedTest = func(head.data);

        if (!hasPassedTest) return false;

        head = head.next;
    }

    return true;
}
