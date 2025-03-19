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
var sumEvenGrandparent = function(root) {
    let sum = 0;
    const evenParents = [];
    const stack = [];
    stack.push(root);
    while (stack.length){
        let curr = stack.pop();
        if (curr.left){
            stack.push(curr.left);
            if (curr.val % 2 === 0) evenParents.push(curr.left);
        }
        if (curr.right){
            stack.push(curr.right);
            if (curr.val % 2 === 0) evenParents.push(curr.right);
        }
    }
    while (evenParents.length){
        let curr = evenParents.pop();
        if (curr.left) sum+= curr.left.val;
        if (curr.right) sum+= curr.right.val;
    }
    return sum;
};