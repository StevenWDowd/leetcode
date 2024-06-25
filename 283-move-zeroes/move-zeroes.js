/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let left = 0;
    let right = 1;
    while (right < nums.length){
        let currLeft = nums[left];
        let currRight = nums[right];
        if (currRight !==0 && currLeft === 0){
            nums[left] = currRight;
            nums[right] = 0;
            left++;
            right++;
        } else if (currLeft !==0 && currRight !==0){
            right++;
            left++;
        } else if (currRight === 0 && currLeft !==0){
            right++;
            left++;
        } else {
            right++;
        }
    }
    return nums;
    
};