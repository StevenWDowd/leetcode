/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    let ans = [];
    for (let i = 0; i < n + 1; i++){
        let bin = i.toString(2);
        let total = 0;
        for (let char of bin){
            if (char === '1') total++;
        }
        ans.push(total);
    }
    return ans;
};