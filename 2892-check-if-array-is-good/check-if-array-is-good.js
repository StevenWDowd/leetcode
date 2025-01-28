/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isGood = function(nums) {
    if (nums.length < 2) return false;
    const n = nums.length - 1;
    const freqMap = new Map();
    for (let num of nums){
        if (freqMap.has(num)){
            //could break early here, but eh
            freqMap.set(num, freqMap.get(num) + 1);
        } else {
            freqMap.set(num, 1);
        }
    }
    for (let i = 1; i < n + 1; i++){
        if (!freqMap.has(i)) return false;
        let curr = freqMap.get(i);
        if (i === n){
            if (curr !== 2) return false;
        } else {
            if (curr !== 1) return false;
        }
    }
    return true;
};