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
 */
var FindElements = function(root) {
    this.root = root;
    this.root.val = 0;
    const stack = [];
    stack.push(root);
    while (stack.length){
        let curr = stack.pop();
        if (curr.left){
            curr.left.val = 2*curr.val + 1;
            stack.push(curr.left);
        }
        if (curr.right){
            curr.right.val = 2*curr.val + 2;
            stack.push(curr.right);
        }
    }
};

/** 
 * @param {number} target
 * @return {boolean}
 */
FindElements.prototype.find = function(target) {
    const stack = [];
    stack.push(this.root);
    while (stack.length){
        let curr = stack.pop();
        if (curr.val === target) return true;
        //if (curr.val < 2*target) return false; //think this won't work
        if (curr.left) stack.push(curr.left);
        if (curr.right) stack.push(curr.right);
    }
    return false;
};

/** 
 * Your FindElements object will be instantiated and called as such:
 * var obj = new FindElements(root)
 * var param_1 = obj.find(target)
 */