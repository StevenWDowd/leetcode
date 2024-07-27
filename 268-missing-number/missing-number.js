/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    const numMap = new Map();
    for (let num of nums){
        numMap.set(num, num);
    }
    for (let i = 0; i <= nums.length; i++){
        if (!numMap.has(i)) return i;
    }

    return 0;

    
};