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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    let queue = [root];
    let vals = [];
    if (!root) return vals;
    let pow = 0;
    //let count = 2**pow;
    //let lev = [];
    while (queue.length){
        let count = queue.length;
        let lev = [];
        while (count > 0){
            let curr = queue.shift();
            //count--;
            if (curr.left) queue.push(curr.left);
            if (curr.right) queue.push(curr.right);
            lev.push(curr.val);
            count--;
        }
        vals.push(lev);

        // lev.push(curr.val);
        // if (lev.length === 2**pow){
        //     vals.push(lev);
        //     lev = [];
        //     pow++;
        // }

    }
    //if (lev.length > 0) vals.push(lev);
    return vals;
};