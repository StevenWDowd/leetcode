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
var averageOfLevels = function(root) {
    const queue = [root];
    const ans = [];
    while (queue.length){
        let nodes = [];
        while (queue.length){
            nodes.push(queue.pop());
        }
        let total = 0;
        let count = nodes.length;
        for (let node of nodes){
            total+= node.val;
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        ans.push(total/count);
    }
    return ans;
};