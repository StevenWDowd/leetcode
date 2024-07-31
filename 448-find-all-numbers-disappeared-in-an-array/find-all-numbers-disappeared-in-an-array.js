/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    const numMap = new Map();
    const missingNos = [];
    for (let num of nums){
        if (numMap.has(num)){
            //no need to to anything here
        } else {
            numMap.set(num, true);
        }
    }
    for (let i = 1; i <= nums.length; i++){
        if (!numMap.has(i)) missingNos.push(i);
    }
    return missingNos;
    
};