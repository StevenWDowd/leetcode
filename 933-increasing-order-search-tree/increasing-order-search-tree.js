/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var increasingBST = function(root) {
    if (!root) return root;
    let nodes = iOTraverse(root);
    console.log('nodes is: ', nodes);
    let newRoot = nodes[0];
    newRoot.left = null;
    newRoot.right = null;
    let curr = newRoot;
    let idx = 1;
    while (idx < nodes.length){
        let next = nodes[idx];
        next.left = null;
        next.right = null;
        curr.right = next;
        curr = curr.right;
        idx++;

    }
    return newRoot;
};

function iOTraverse(root){
    if (!root) return [];
    if (!root.right && !root.left) return [root];
    return iOTraverse(root.left).concat([root]).concat(iOTraverse(root.right));
}