/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const freqMap = new Map();
    for (let num of nums){
        if (freqMap.has(num)){
            let current = freqMap.get(num);
            freqMap.set(num, current + 1);
        } else {
            freqMap.set(num, 1);
        }
    }
    //let keys = freqMap.keys();
    let pairArr = Array.from(freqMap.entries());
    // for (let key of freqMap){
    //     pairArr.push[key, freqMap.get(key)];
    // }
    console.log('pairs: ', pairArr);

    const sortedPairs = pairArr.sort((a,b) => b[1] - a[1]);
    const finalArr = [];
    for (let i = 0; i < k; i++){
        let pair = sortedPairs[i];
        finalArr.push(pair[0]);
    }
    return finalArr;


    //const sortedNums = nums.sort((a,b) => return a-b);
    
    
};