/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    const numSet = new Set(nums);
    const filtered = Array.from(numSet);
    filtered.sort((a,b) => b-a);
    if (filtered.length < 3) return filtered[0];
    return filtered[2];
};