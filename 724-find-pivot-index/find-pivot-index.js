/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    const leftSums = [];
    const rightSums = [nums.length];
    let leftVal = 0;
    let rightVal = 0;
    for (let i = 0; i < nums.length ; i++){
        leftVal+= nums[i];
        leftSums.push(leftVal)
    }
    for (let i = nums.length - 1; i >= 0; i--){
        rightVal+= nums[i];
        rightSums[i] = rightVal;
    }
    for (let i = 0; i < nums.length; i++){
        if (leftSums[i] === rightSums[i]) return i;
    }

    return -1;
};