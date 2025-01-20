/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    const ans = [];
    for (let i = 0; i < arr.length; i++){
        let curr = arr[i];
        if (fn(curr, i)) ans.push(curr);
    }
    return ans;
};