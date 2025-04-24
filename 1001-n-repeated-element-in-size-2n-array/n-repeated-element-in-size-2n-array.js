/**
 * @param {number[]} nums
 * @return {number}
 */
var repeatedNTimes = function(nums) {
    let n = nums.length / 2;
    const freqMap = new Map();
    for (let num of nums){
        if (freqMap.has(num)){
            freqMap.set(num, freqMap.get(num) + 1);
        } else {
            freqMap.set(num, 1);
        }
        if (freqMap.get(num) === n) return num;
    }
    return -1;
};