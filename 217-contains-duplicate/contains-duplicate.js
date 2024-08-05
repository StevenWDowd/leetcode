/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    //could also use a set?
    // const freqMap = new Map();
    // for (let num of nums){
    //     if (freqMap.has(num)){
    //         freqMap.set(num, freqMap.get(num) + 1);
    //     } else {
    //         freqMap.set(num, 1);
    //     }
    // }
    const numSet = new Set();
    for (let num of nums){
        numSet.add(num);
    }

    if (numSet.size === nums.length) return false;

    return true;

    
};