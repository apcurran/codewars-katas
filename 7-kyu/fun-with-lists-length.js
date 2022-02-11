"use strict";

/**
 * 
 * @param {object} head 
 * @returns {number}
 */
function length(head) {
    let current = head;
    let length = 0;

    while (current !== null) {
        length++;
        current = current.next;
    }

    return length;
}