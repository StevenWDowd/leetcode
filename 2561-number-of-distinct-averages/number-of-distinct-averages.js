/**
 * @param {number[]} nums
 * @return {number}
 */
var distinctAverages = function(nums) {
    const avgSet = new Set();
    nums.sort((a,b) => a-b);
    let left = 0;
    let right = nums.length - 1;
    while (left < right){
        let num1 = nums[left];
        let num2 = nums[right];
        avgSet.add((num1 + num2) / 2);
        left++;
        right--;
    }
    return avgSet.size;
};