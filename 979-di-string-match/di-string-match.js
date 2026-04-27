/**
 * @param {string} s
 * @return {number[]}
 */
var diStringMatch = function(s) {
    //length n, nums are 0 to s.length
    let d = s.length;
    let i = 0;
    const ans = [];
    for (let char of s){
        if (char === 'I'){
            ans.push(i);
            i++
        } else {
            ans.push(d);
            d--;
        }
    }
    //could be either, no?
    ans.push(d);
    return ans;
};