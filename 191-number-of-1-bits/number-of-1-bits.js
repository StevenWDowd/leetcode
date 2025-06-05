/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function(n) {
    let bin = n.toString(2);
    let count = 0;
    for (let char of bin){
        if (char === '1') count++;
    }
    return count;
};