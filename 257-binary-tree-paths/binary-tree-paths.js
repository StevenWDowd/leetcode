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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    const paths = [];
    const queue = [[root, [root.val]]];
    while (queue.length){
        let [curr, path] = queue.shift();
        if (!curr.left && !curr.right){
            console.log('at leaf');
            //array of vals to string
            paths.push(path.join('->'));
        }
        if (curr.left){
            console.log('adding left');
            let newPath = [...path];
            newPath.push(curr.left.val);
            queue.push([curr.left,newPath]);
        }
        if (curr.right){
            console.log('adding right');
            let newPath = [...path];
            newPath.push(curr.right.val);
            queue.push([curr.right,newPath]);
        }
    }
    return paths;
};