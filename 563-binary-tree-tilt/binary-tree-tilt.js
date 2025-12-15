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
var findTilt = function(root) {
    if (!root || root === null) return 0;
    //let count = root.val;
    // let lval = 0;
    // let rval = 0;
    // if (root.left) lval = root.left.val;
    // if (root.right) rval = root.right.val;
    // let tilt = lval-rval; 
    let lTilt = findTilt(root.left);
    let rTilt = findTilt(root.right);
    return Math.abs(sumTree(root.left) - sumTree(root.right)) + lTilt + rTilt;
    
};

function sumTree(root){
    if (!root || root === null) return 0;
    return root.val + sumTree(root.left) + sumTree(root.right);
}