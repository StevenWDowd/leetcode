/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function(root1, root2) {
    const stack = [root1];
    const leaves1 = [];
    const leaves2 = [];
    while (stack.length){
        let curr = stack.pop();
        if (!curr.left && !curr.right){
            leaves1.push(curr.val);
        }
        if (curr.left) stack.push(curr.left);
        if (curr.right) stack.push(curr.right);
    }

    const stack2 = [root2];
    while(stack2.length){
        let curr = stack2.pop();
        if (!curr.left && !curr.right){
            leaves2.push(curr.val);
        }
        if (curr.left) stack2.push(curr.left);
        if (curr.right) stack2.push(curr.right);
    }
    console.log('leaves1 is: ', leaves1);
    console.log('leaves2 is: ', leaves2);
    if (leaves1.length === leaves2.length){
        for (let i = 0; i < leaves1.length; i++){
            if (leaves1[i] !== leaves2[i]) return false;
        }
        return true;
    }
    return false;
};