/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function(nums, k) {
    let sum = nums.reduce((acc, curr) => acc + curr, 0);
    let opCount = 0;
    while (sum % k !== 0){
        sum--;
        opCount++;
    }
    return opCount;
};