/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[][]} descriptions
 * @return {TreeNode}
 */
var createBinaryTree = function(descriptions) {
    const nodes = new Map();
    //key: the val
    //val: the whole node
    //const parMap = new Map();
    const chiMap = new Map();
    for (let description of descriptions){
        let node;
        if (nodes.has(description[0])){
            node = nodes.get(description[0]);
        } else {
            node = new TreeNode(description[0]);
        }
        let child;
        if (nodes.has(description[1])){
            child = nodes.get(description[1]);
        } else {
            child = new TreeNode(description[1]);
        }
        if (description[2] === 1){
            node.left = child;
        } else {
            node.right = child;
        }
        nodes.set(description[0], node);
        nodes.set(description[1], child);
        chiMap.set(description[1], child);
    }
    for (let description of descriptions){
        let val = description[0];
        if (!chiMap.has(val)){
            return nodes.get(val);
        }
    }
    return new TreeNode(0);
};