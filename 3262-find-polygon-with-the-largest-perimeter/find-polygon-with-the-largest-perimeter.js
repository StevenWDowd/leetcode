/**
 * @param {number[]} nums
 * @return {number}
 */
var largestPerimeter = function(nums) {
    //sort nums first?
    const sortedNums = nums.sort((a,b) => a - b);
    let sum = 0;
    for (let i = 0; i < sortedNums.length - 1; i++){
        sum+= sortedNums[i];
    }
    let biggest = sortedNums[sortedNums.length - 1];
    let idx = sortedNums.length - 2;
    while (biggest >= sum && idx > 0){
        biggest = sortedNums[idx];
        sum-= biggest;
        idx--;
    }
    if (idx <= 0) return -1;
    return sum + biggest;
};