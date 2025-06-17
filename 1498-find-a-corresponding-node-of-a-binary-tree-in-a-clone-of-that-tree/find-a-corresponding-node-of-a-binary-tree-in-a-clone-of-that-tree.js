/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} original
 * @param {TreeNode} cloned
 * @param {TreeNode} target
 * @return {TreeNode}
 */

var getTargetCopy = function(original, cloned, target) {
    let stack = [original];
    let clonestack = [cloned];
    while (stack.length && clonestack.length){
        let oCurr = stack.pop();
        let cCurr = clonestack.pop();
        if (oCurr.val === target.val) return cCurr;
        if (oCurr.left) stack.push(oCurr.left);
        if (oCurr.right) stack.push(oCurr.right);
        if (cCurr.left) clonestack.push(cCurr.left);
        if (cCurr.right) clonestack.push(cCurr.right);
    }
    return null;
};