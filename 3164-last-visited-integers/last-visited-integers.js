/**
 * @param {number[]} nums
 * @return {number[]}
 */
var lastVisitedIntegers = function(nums) {
    let ans = [];
    let seen = [];
    let negCount = 0;
    for (let num of nums){
        if (num > 0) {
            negCount = 0;
            seen.unshift(num);
        } else {
            negCount++;
            if (negCount <= seen.length){
                ans.push(seen[negCount - 1]);
            } else {
                ans.push(-1);
            }
        }
    }

    return ans;
};