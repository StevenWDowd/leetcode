/**
 * @param {number[]} nums
 * @return {boolean}
 */
var divideArray = function(nums) {
    const numMap = new Map();
    for (let num of nums){
        if (numMap.has(num)){
            //if (numMap.get(num) > 1) return false;
            numMap.set(num, numMap.get(num) + 1);
        } else {
            numMap.set(num, 1);
        }
    }
    for (let [key, val] of numMap){
        if (val % 2 !== 0) return false;
    }
    return true;
};