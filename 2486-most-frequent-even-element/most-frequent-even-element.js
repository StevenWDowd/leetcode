/**
 * @param {number[]} nums
 * @return {number}
 */
var mostFrequentEven = function(nums) {
    let ans = -1;
    const evenMap = new Map();
    for (let num of nums){
        if (num % 2 === 0){
            if (evenMap.has(num)){
                evenMap.set(num, evenMap.get(num) + 1);
            } else {
                evenMap.set(num, 1);
            }
        }
    }

    const frequents = [];
    let max = 0;
    for (let [num, freq] of evenMap){
        if (freq > max) max = freq;
    }
    for (let [num, freq] of evenMap){
        if (freq === max) frequents.push(num);
    }

    if (frequents.length) ans = Math.min(...frequents);

    return ans;
    
};