"use strict";

class ListNode {
    /** 
     * @param {number} val
     * @param {ListNode|null} leftNode
     * @param {ListNode|null} rightNode
     */
    constructor(val, leftNode = null, rightNode = null) {
        this.val = val;
        this.left = leftNode;
        this.right = rightNode;
    }
}

/**
 * 
 * @param {ListNode} a 
 * @param {ListNode} b 
 * @returns {boolean}
 */
function compare(a, b) {
    if (a === null && b === null) return true;

    if (a === null || b === null) return false;

    if (a.val !== b.val) return false;

    return compare(a.left, b.left) && compare(a.right, b.right);
}
