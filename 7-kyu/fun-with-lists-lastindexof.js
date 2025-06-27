"use strict";

/**
 * solution 1 -- iterative
 * time: O(n)
 * space: O(1)
 *
 * @param {object} head
 * @param {number} value
 * @returns {number}
 */
function lastIndexOf(head, value) {
    let index = 0;
    let lastValIndex = -1;
    let current = head;

    while (current !== null) {
        if (current.data === value) {
            lastValIndex = index;
        }

        index++;
        current = current.next;
    }

    return lastValIndex;
}
