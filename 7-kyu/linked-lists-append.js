"use strict";

function ListNode(data) {
    this.data = data;
    this.next = null;
}

/**
 * solution 1 -- iterative
 * time: O(n)
 * space: O(1)
 * 
 * @param {*} listA 
 * @param {*} listB 
 */
function append(listARoot, listBRoot) {
    if (listARoot === null && listBRoot === null) return null;

    if (listARoot === null && listBRoot !== null) return listBRoot;

    if (listARoot !== null && listBRoot === null) return listARoot;

    let current = listARoot;

    while (current.next !== null) {
        // traverse right
        current = current.next;
    }

    // hit null end of listARoot.next
    current.next = listBRoot;

    return listARoot;
}
