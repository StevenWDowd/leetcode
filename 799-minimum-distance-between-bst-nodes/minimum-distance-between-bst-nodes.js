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
var minDiffInBST = function(root) {
    function inorderTraversal(root){
        if (!root) return [];
        if (!root.right && !root.left) return [root.val];
        return inorderTraversal(root.left).concat([root.val]).concat(inorderTraversal(root.right));
    };
    let sorted = inorderTraversal(root);
    let min;
    for (let i = 0; i < sorted.length - 1; i++){
        let curr = sorted[i];
        let next = sorted[i+1];
        if (min){
            if (Math.abs(curr-next) < min) min = Math.abs(curr-next);
        } else {
            min = Math.abs(curr-next);
        }
    }
    return min;

};