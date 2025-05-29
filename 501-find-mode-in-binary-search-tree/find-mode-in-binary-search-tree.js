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
var findMode = function(root) {
    const freqMap = new Map();
    let stack = [];
    stack.push(root);
    while(stack.length){
        let curr = stack.pop();
        if (freqMap.has(curr.val)){
            freqMap.set(curr.val, freqMap.get(curr.val) + 1);
        } else {
            freqMap.set(curr.val, 1);
        }
        if (curr.left) stack.push(curr.left);
        if (curr.right) stack.push(curr.right);
    }

    let pairs = Array.from(freqMap.entries());
    pairs.sort((a,b) => b[1] - a[1]);
    if (!pairs.length) return pairs;
    let best = pairs[0][1];
    let modes = [];
    for (let pair of pairs){
        if (pair[1] === best) modes.push(pair[0]);
    }
    return modes;

    
};