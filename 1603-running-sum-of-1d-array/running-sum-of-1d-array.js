/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    const runArr = [];
    let sum = 0;
    let idx = 0;
    while (idx < nums.length){
        runArr.push(nums[idx] + sum);
        sum+= nums[idx];
        idx++;
    }
    return runArr;
};