/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    //sorted method, easy. come back to this
    nums.sort((a,b) => b-a);
    return nums[k-1]
};