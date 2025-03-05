/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxK = function(nums) {
    const numSet = new Set();
    for (let num of nums){
        if (!numSet.has(num)) numSet.add(num);
    }
    nums.sort((a,b) => b-a);
    for (let num of nums){
        if (numSet.has(num * -1)) return num;
    }
    return -1;
};