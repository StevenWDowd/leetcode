/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function(arr) {
    const freqMap = new Map();
    for (let num of arr){
        if (freqMap.has(num)){
            freqMap.set(num, freqMap.get(num) + 1);
        } else {
            freqMap.set(num, 1);
        }
    }
    let bigLucky = -1;
    for (let [key, val] of freqMap){
        if (key === val && key > bigLucky) bigLucky = key;
    }
    return bigLucky;
};