/**
 * @param {number[]} nums
 * @return {number}
 */
var countPartitions = function(nums) {
    let evenCount = 0;
    let sumLeft = 0;
    //start at 0
    let arrSum = nums.reduce((acc, curr) => acc + curr, 0);
    let idx = 0;
    while (idx < nums.length - 1){
        let curr = nums[idx];
        sumLeft+= curr;
        arrSum-= curr;
        if ((sumLeft - arrSum) % 2 === 0) evenCount++;
        idx++;
    }
    return evenCount;
    
};