"use strict";

var TreeNode = function (value, left, right) {
    this.value = value;
    this.left = left;
    this.right = right;
};

/**
 * solution 1 -- recursive
 * time: O(n)
 * space: O(n)
 * 
 * @param {TreeNode} root 
 * @returns {number}
 */
function maxSum(root) {
    if (root === null || root === undefined) return 0;

    const leftSubtreeMax = maxSum(root.left);
    const rightSubtreeMax = maxSum(root.right);
    const maxSubtreeVal = Math.max(leftSubtreeMax, rightSubtreeMax);

    return root.value + maxSubtreeVal;
}