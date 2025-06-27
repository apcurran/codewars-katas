"use strict";

class ListNode {
    /** 
     * @param {number} value
     * @param {ListNode|null} leftNode
     * @param {ListNode|null} rightNode
     */
    constructor(value, leftNode = null, rightNode = null) {
        this.value = value;
        this.left = leftNode;
        this.right = rightNode;
    }
}

const a = new ListNode(10);
const b = new ListNode(1);
const c = new ListNode(2);

a.left = b;
a.right = c;

/**
 * solution 1 -- iterative pre-order dfs
 * time: O(n)
 * space: O(n)
 * 
 * @param {ListNode} root
 * @returns {number}
 */
// function sumTheTreeValues(root) {
//     let stack = [root];
//     let totalSum = 0;

//     while (stack.length > 0) {
//         const currNode = stack.pop();

//         totalSum += currNode.value;

//         // is the left child not null?
//         if (currNode.left !== null) stack.push(currNode.left);
//         // is the right child not null?
//         if (currNode.right !== null) stack.push(currNode.right);
//     }

//     return totalSum;
// }

/**
 * solution 2 -- recursive pre-order dfs
 * time: O(n)
 * space: O(n)
 * 
 * @param {ListNode} root 
 * @returns {number}
 */
function sumTheTreeValues(root) {
    if (root === null) return 0;

    const leftSum = sumTheTreeValues(root.left);
    const rightSum = sumTheTreeValues(root.right);

    return root.value + leftSum + rightSum;
}

console.log( sumTheTreeValues(a) ); // 13
