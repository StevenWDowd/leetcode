/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
    const numMap = new Map();
    let goods = 0;
    for (let num of nums){
        if (numMap.has(num)){
            goods+= numMap.get(num);
            numMap.set(num, numMap.get(num) + 1);
        } else {
            numMap.set(num, 1);
        }
    }
    return goods;
};