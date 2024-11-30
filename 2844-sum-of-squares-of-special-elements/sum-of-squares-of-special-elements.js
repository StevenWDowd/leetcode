/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfSquares = function(nums) {
    let sum = 0;
    for (let i = 0; i < nums.length; i++){
        let curr = nums[i];
        if (nums.length % (i + 1) === 0) sum+= curr ** 2;
    }
    return sum;
};