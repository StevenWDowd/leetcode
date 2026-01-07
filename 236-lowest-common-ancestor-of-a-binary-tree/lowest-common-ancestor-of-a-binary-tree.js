/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    if (!root) return null;
    if (root.val === p.val || root.val === q.val) return root;

    let lSearch = lowestCommonAncestor(root.left, p, q);
    let rSearch = lowestCommonAncestor(root.right, p, q);

    if (lSearch !== null && rSearch !== null) return root;
    return (lSearch !== null ? lSearch : rSearch)
};