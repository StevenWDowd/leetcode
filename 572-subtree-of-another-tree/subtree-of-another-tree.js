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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function(root, subRoot) {
    const stack = [root];
    while (stack.length){
        let curr = stack.pop();
        if (curr.left) stack.push(curr.left);
        if (curr.right) stack.push(curr.right);
        if (curr.val === subRoot.val){
            let res = compTrees(curr, subRoot);
            if (res) return true;
        }
    }
    return false;
};

function compTrees(tree1, tree2){
    if (!tree1 && !tree2) return true;
    if (tree1 && tree2){
        if (tree1.val !== tree2.val) return false;
        return (true && compTrees(tree1.left, tree2.left) && compTrees(tree1.right, tree2.right));
    }
    return false;
}