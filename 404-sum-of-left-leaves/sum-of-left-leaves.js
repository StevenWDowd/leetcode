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
var sumOfLeftLeaves = function(root) {
    let stack = [];
    let sum = 0;
    let curr = root;
    stack.push(curr);
    while (stack.length){
        let curr = stack.pop();
        if (curr.right) stack.push(curr.right);
        if (curr.left){
            if (!curr.left.left && !curr.left.right){
                sum+= curr.left.val;
            } else {
                stack.push(curr.left);
            }
        }
    }
    return sum;
};