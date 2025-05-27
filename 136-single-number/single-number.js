/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let curr = nums[0];
    let idx = 1;
    while (idx < nums.length){
        curr = curr ^ nums[idx];
        idx++;
    }
    return curr;
};