/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var numberOfChild = function(n, k) {
    let forward = true;
    let curr = 0;
    while (k > 0){
        if (forward){
            curr++;
            if (curr === n - 1) forward = false;
        } else {
            curr--;
            if (curr === 0) forward = true;
        }
        k--;
    }
    return curr;
};
