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
var balanceBST = function(root) {
    const nodes = [];
    collectNodes(root, nodes);
    console.log('nodes is: ', nodes);
    let tree = buildTree(0, nodes.length - 1, nodes);
    return tree;

};

function collectNodes(root, arr){
    if (!root){
        return;
    }
    collectNodes(root.left, arr);

    arr.push(root.val);

    collectNodes(root.right, arr);
}

function buildTree(left, right, arr){
    if (left > right) return null;
    let middle = left + Math.floor((right - left)/2);
    const node = new TreeNode(arr[middle]);
    node.left = buildTree(left, middle - 1, arr);
    node.right = buildTree(middle + 1, right, arr);
    return node;

}