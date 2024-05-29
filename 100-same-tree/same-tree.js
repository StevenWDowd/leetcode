/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    const stack = [];
    stack.push(p);
    stack.push(q);

    while(stack.length > 0 && stack.length % 2 == 0){
        let node1 = stack.pop();
        let node2 = stack.pop();

        if (!compNodes(node1, node2)){
            return false;
        }

        if (node1){
            stack.push(node1.left)
        }
        if (node2){
            stack.push(node2.left)
        }

        if (node1){
            stack.push(node1.right)
        }
        if (node2){
            stack.push(node2.right)
        }

    }

    if (stack.length > 0){
        return false;
    }

    return true;
};

function compNodes(node1, node2){
    if ((!node1 && node2) || (node1 && !node2)){
        return false;
    }

    if (!node1 && !node2){
        return true;
    }

    if (node1.val === node2.val){
        return true;
    }
}