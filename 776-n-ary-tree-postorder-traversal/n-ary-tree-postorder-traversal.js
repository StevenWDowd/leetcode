/**
 * // Definition for a _Node.
 * function _Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {_Node|null} root
 * @return {number[]}
 */
var postorder = function(root) {
    const ans = [];
    if (!root) return ans;
    const stack = [];
    const nodes = [];
    stack.push(root);
    while (stack.length){
        let curr = stack.pop();
        nodes.push(curr);
        for (let child of curr.children){
            stack.push(child);
        }
    }
    while (nodes.length){
        let curr = nodes.pop();
        ans.push(curr.val);
    }
    return ans;
};