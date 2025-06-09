/**
 * // Definition for a _Node.
 * function _Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {_Node|null} root
 * @return {number[]}
 */
var preorder = function(root) {
    const ans = [];
    if (!root) return ans;
    const nodes = [];
    const stack = [root];
    while (stack.length){
        let curr = stack.pop();
        //ans.push(curr.val)
        nodes.push(curr);
        // for (let child of curr.children){
        //     stack.push(child);
        // }
        for (let i = curr.children.length - 1; i > -1; i--){
            stack.push(curr.children[i]);
        }
    }
    for (let node of nodes){
        ans.push(node.val);
    }
    return ans;
};