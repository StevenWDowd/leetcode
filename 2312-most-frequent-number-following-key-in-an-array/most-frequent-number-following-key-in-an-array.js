/**
 * @param {number[]} nums
 * @param {number} key
 * @return {number}
 */
var mostFrequent = function(nums, key) {
    const freqMap = new Map();
    for (let i = 0; i < nums.length - 1; i++){
        let curr = nums[i];
        let next = nums[i + 1];
        if (curr === key){
            if (freqMap.has(next)){
                freqMap.set(next, freqMap.get(next) + 1);
            } else {
                freqMap.set(next, 1);
            }
        }
    }
    let pair = [0, 0];
    for (let [key, freq] of freqMap){
        if (freq > pair[1]){
            pair[0] = key;
            pair[1] = freq;
        }
    }
    return pair[0];


};