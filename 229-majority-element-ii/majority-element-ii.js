/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
    const numMap = new Map();
    for (let num of nums){
        if (numMap.has(num)){
            numMap.set(num, numMap.get(num) + 1);
        } else {
            numMap.set(num, 1);
        }
    }

    const answerSet = new Set();
    for (let num of nums){
        if (numMap.get(num) > (nums.length/3)) answerSet.add(num);
    }
    return Array.from(answerSet);
};