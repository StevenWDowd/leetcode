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
 * @return {boolean}
 */
var isBalanced = function(root) {
    return balHeight(root) > -1;
    
};

function balHeight(root){
    if (!root) return 0;
    let lHeight = balHeight(root.left);
    let rHeight = balHeight(root.right);
    if (Math.abs(lHeight - rHeight) > 1) return -1;
    if (lHeight === -1 || rHeight === -1) return -1;

    return Math.max(lHeight, rHeight) + 1;

}