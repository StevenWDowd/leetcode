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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    const vals = inOrder(root);
    //console.log(vals);
    return vals[k-1];
};

function inOrder(root){
    if (!root) return [];
    return inOrder(root.left).concat([root.val]).concat(inOrder(root.right));
}