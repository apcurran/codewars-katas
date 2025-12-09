// preloaded Node definition :
class TreeNode {
    constructor(data, children = []) {
        this.data = data;
        this.children = children;
    }
}

/**
 * solution 1 -- BFS
 * n = nodes
 * time: O(n^2)
 * space: O(n)
 *
 * @param {TreeNode} root
 * @returns {number[]}
 */
function treeToArray(root) {
    if (Array.isArray(root)) return [];

    let queue = [root];
    let results = [];

    while (queue.length > 0) {
        const current = queue.shift();
        results.push(current.data);

        for (let child of current.children) {
            queue.push(child);
        }
    }

    return results;
}

console.log(
    treeToArray(
        new TreeNode(1, [
            new TreeNode(2, [new TreeNode(3), new TreeNode(4), new TreeNode(5)]),
            new TreeNode(3, [new TreeNode(7)]),
        ]),
    ),
);
// [1, 2, 3, 3, 4, 5, 7]
