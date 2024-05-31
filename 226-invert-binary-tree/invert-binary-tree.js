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
 * @return {TreeNode}
 */
var invertTree = function(root) {
    //base case
    if (!root){
        return root;
    }
    if(!root.left && !root.right){
        return root;
    }

    //has one side
    if (!root.left && root.right){
        root.left = invertTree(root.right);
        root.right = null;
        return root;
    }

    if (!root.right && root.left){
        root.right = invertTree(root.left);
        root.left = null;
        return root;
    }

    //both sides
    if (root.right && root.left){
        let right = root.right;
        let left = root.left;
        root.right = invertTree(left);
        root.left = invertTree(right);
        return root;
    }

};