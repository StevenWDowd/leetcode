/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function(nums) {
    let isInc = true;
    let isDesc = true;
    for (let i = 0; i < nums.length - 1; i++){
        let current = nums[i];
        let next = nums[i+1];
        if (current > next) isInc = false;
        if (current < next) isDesc = false;
    }
    return (isInc || isDesc);
};