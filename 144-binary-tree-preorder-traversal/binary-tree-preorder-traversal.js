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
 * @return {number[]}
 */
var preorderTraversal = function(root) {
    const stack = [];
    const vals = [];
    stack.push(root);
    while (stack.length){
        let curr = stack.pop();
        if (curr) {
            vals.push(curr.val);
            //if (curr.left) stack.push(curr.left);
            if (curr.right) stack.push(curr.right);
            if (curr.left) stack.push(curr.left);
        }
    }
    return vals;
};