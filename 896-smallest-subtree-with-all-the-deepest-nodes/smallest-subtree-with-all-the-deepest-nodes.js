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
 * @return {TreeNode}
 */
var subtreeWithAllDeepest = function(root) {
    //key is node, val is array of its children
    let nodeMap = new Map();
    //key is node, val is its parent;
    let revMap = new Map()
    revMap.set(root, root);
    let stack = [root];
    while (stack.length){
        let curr = stack.pop();
        let kids = new Set();
        if (curr.left){
            kids.add(curr.left);
            stack.push(curr.left);
            revMap.set(curr.left, curr);
        }
        if (curr.right){
            kids.add(curr.right);
            stack.push(curr.right);
            revMap.set(curr.right, curr);
        }
        nodeMap.set(curr, kids);
    }
    // let candidates = [];
    // for (let [node, kids] of nodeMap){
    //     if (kids.size === 0) candidates.push(node);
    // }
    //let candidates = deepestNodes(root);
    let levs = levOrder(root);
    let candidates = levs.pop();
    console.log('initial candidates: ', candidates);
    //easy case of one deepest node
    if (candidates.length === 1) return candidates[0];
    //more than 2: we need to go up a level
    //if ever more than 1, move on to parents. if one parent, return it
    while (candidates.length > 1){
        //let newCand = [];
        let parentSet = new Set();
        for (let c of candidates){
            //if 2 leaves have same parent, return that parent? no
            let parent = revMap.get(c);
            //if (parentSet.has(parent)) return parent;
            parentSet.add(parent);
        }
        candidates = Array.from(parentSet);
        console.log('candidates is now: ', candidates);
    }
    return candidates[0];
    //let found = false;
    //want all candidates to have a common parent
    //if we have more than two, we know we have to go up a level. optimize?
    //while (!found){

    //}

    // if (!root) return null;
    // //if all lowest nodes are evenly deep, we need the root...
    // //if two children, can still be the root
    // //if only one child, then answer is a subtree
    // //if one node is deepest, that node is the answer
    // if (!root.left && !root.right){
    //     return root;
    // }
    // if (root.left && root.right){
    //     let lRes = subtreeWithAllDeepest(root.left);
    //     let rRes = subtreeWithAllDeepest(root.right);
    //     return Math.max()
    // }

    // if (!root.left){
    //     return subtreeWithAllDeepest(root.right);
    // }
    // if (!root.right){
    //     return subtreeWithAllDeepest(root.left);
    // }
};

function levOrder(root){
    //level order traversal
    let queue = [root];
    let nodes = [];
    if (!root) return nodes;
    //let pow = 0;
    while (queue.length){
        let count = queue.length;
        let lev = [];
        while (count > 0){
            let curr = queue.shift();
            //count--;
            if (curr.left) queue.push(curr.left);
            if (curr.right) queue.push(curr.right);
            lev.push(curr);
            count--;
        }
        nodes.push(lev);   
    }
    return nodes;
};
