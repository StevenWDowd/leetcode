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
var diameterOfBinaryTree = function(root) {
    if (!root) return 0;
    let leftH = getHeight(root.left);
    let rightH = getHeight(root.right);

    let diamL = diameterOfBinaryTree(root.left);
    let diamR = diameterOfBinaryTree(root.right);

    return Math.max(leftH+rightH, diamL, diamR);
    
};

function getHeight(root){
    if (!root){
        return 0;
    }

    return 1 + Math.max(getHeight(root.left), getHeight(root.right));
}