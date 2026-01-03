/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    //a set with n unique objects has 2^n subsets
    const ans = [];
    const subset = [];
    builder(0, nums, ans, subset);
    return ans;

};

function builder(n, nums, ans, subset){
    if (n === nums.length){
        let copy = [...subset];
        ans.push(copy);
        return
    }

    subset.push(nums[n]);
    builder(n+1, nums, ans, subset);

    subset.pop();
    builder(n+1, nums, ans, subset);
}
