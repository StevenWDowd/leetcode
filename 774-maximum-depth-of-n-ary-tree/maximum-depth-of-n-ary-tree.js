/**
 * // Definition for a _Node.
 * function _Node(val,children) {
 *    this.val = val === undefined ? null : val;
 *    this.children = children === undefined ? null : children;
 * };
 */

/**
 * @param {_Node|null} root
 * @return {number}
 */
var maxDepth = function(root) {
    if (!root) return 0;
    if (!root.children || root.children.length === 0) return 1;
    //if (!root.children.length) return 1;
    let kids = [];
    let max = 0;
    for (let child of root.children){
        kids.push(maxDepth(child));
    }
    let bestPath = Math.max(...kids);
    max = Math.max(max, bestPath);
    return max + 1;
    //console.log('kids is: ', kids);
    
    //return 0;
};