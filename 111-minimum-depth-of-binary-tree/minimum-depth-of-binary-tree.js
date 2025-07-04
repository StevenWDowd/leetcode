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
 * @return {number}
 */
var minDepth = function(root) {
    if (!root) return 0;
    if (!root.left && !root.right) return 1;
    //return Math.min(1 + minDepth(root.left), 1 + minDepth(root.right));
    if (root.right && !root.left){
        return 1 + minDepth(root.right);
    }
    if (!root.right && root.left){
        return 1 + minDepth(root.left);
    }
    if (root.right && root.left){
        return Math.min(1 + minDepth(root.left), 1 + minDepth(root.right));
    }
};