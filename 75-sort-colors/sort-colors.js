/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let num0s = 0;
    let num1s = 0;
    let num2s = 0;
    for (let num of nums){
        if (num === 0) num0s++;
        if (num === 1) num1s++;
        if (num === 2) num2s++;
    }
    for (let i = 0; i < nums.length; i++){
        if (num0s > 0){
            nums[i] = 0;
            num0s--;
        } else if (num1s > 0){
            nums[i] = 1;
            num1s--;
        } else {
            nums[i] = 2;
            num2s--;
        }
    }
    return nums;
    
};