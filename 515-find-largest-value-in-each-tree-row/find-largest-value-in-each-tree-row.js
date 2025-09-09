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
var largestValues = function(root) {
    //const vals = preorderTrav(root);
    const rows = levelOrder(root);
    const ans = [];
    for (let row of rows){
        ans.push(Math.max(...row));
    }
    // let pow = 0;
    // let idx = 0;
    // while(idx < vals.length){
    //     let count = 2**pow;
    //     let largest;
    //     while(count > 0){
    //         let curr = vals[idx];
    //         if (!largest || curr > largest) largest = curr;
    //         idx++;
    //         count--;
    //     }
    //     ans.push(largest);
    //     pow++;
    // }
    return ans;
    
};

function preorderTrav(root){
    const stack = [];
    const vals = [];
    stack.push(root);
    while (stack.length){
        let curr = stack.pop();
        if (curr) {
            vals.push(curr.val);
            //if (curr.left) stack.push(curr.left);
            if (curr.right) stack.push(curr.right);
            if (curr.left) stack.push(curr.left);
        }
    }
    return vals;
}

function levelOrder(root){
    let queue = [root];
    let vals = [];
    if (!root) return vals;
    let pow = 0;
    while (queue.length){
        let count = queue.length;
        let lev = [];
        while (count > 0){
            let curr = queue.shift();
            if (curr.left) queue.push(curr.left);
            if (curr.right) queue.push(curr.right);
            lev.push(curr.val);
            count--;
        }
        vals.push(lev);
    }
    return vals;
    }