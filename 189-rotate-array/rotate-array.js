/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {

    //1 or fewer elements
    if (nums.length < 2){
        return nums;
    }
    const numDict = {};
    for (let i = 0; i < nums.length; i++){
        let num = nums[i];
        let newIdx = i + k;
        while (newIdx > nums.length - 1){
            newIdx = newIdx - nums.length;
        }
        numDict[newIdx] = num;
    }
    for (let i = 0; i < nums.length; i++){
        nums[i] = numDict[i];
    }

};