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
var countNodes = function(root) {
    //base: no root, no nodes
    if (!root){
        return 0;
    }
    //recursive: count root, then go left and right?
    return 1 + countNodes(root.left) + countNodes(root.right);
};