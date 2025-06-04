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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    if (!root){
        //if (targetSum === 0) return true;
        return false;
    }
    //leaf case
    if (!root.left && !root.right){
        if (targetSum - root.val === 0) return true;
        return false;
    }
    let newTarg = targetSum - root.val;
    return (hasPathSum(root.left, newTarg) || hasPathSum(root.right, newTarg));
};