/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isPossibleToSplit = function(nums) {
    //const numSet = new Set(nums);
    //if (numSet.size < nums.length / 2) return false;
    const numMap = new Map();
    for (let num of nums){
        if (numMap.has(num)){
            numMap.set(num, numMap.get(num) + 1);
        } else {
            numMap.set(num, 1);
        }
        if (numMap.get(num) > 2) return false;
    }
    return true;
};