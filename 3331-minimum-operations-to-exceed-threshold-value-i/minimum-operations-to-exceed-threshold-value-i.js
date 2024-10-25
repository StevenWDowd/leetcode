/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function(nums, k) {
    let lesserCount = 0;
    for (let i = 0; i < nums.length; i++){
        if (nums[i] < k) lesserCount++;
    }
    return lesserCount;
    
};