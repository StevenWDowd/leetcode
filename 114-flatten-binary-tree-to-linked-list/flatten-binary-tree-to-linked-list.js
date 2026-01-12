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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
    let nodes = preorder(root);
    //console.log('nodes is: ', nodes);
    let head = nodes[0];
    for (let node of nodes){
        node.left = null;
        node.right = null;
    }
    for (let i = 0; i < nodes.length - 1; i++){
        let curr = nodes[i];
        curr.right = nodes[i+1];
    }
    return head;
};

function preorder(root){
    if (!root) return [];
    if (!root.left && !root.right) return [root];
    return [root].concat(preorder(root.left)).concat(preorder(root.right));
}