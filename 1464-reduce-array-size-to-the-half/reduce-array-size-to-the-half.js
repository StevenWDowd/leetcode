/**
 * @param {number[]} arr
 * @return {number}
 */
var minSetSize = function(arr) {
    const freqMap = new Map();
    for (let num of arr){
        if (freqMap.has(num)){
            freqMap.set(num, freqMap.get(num) + 1);
        } else {
            freqMap.set(num, 1);
        }
    }
    const pairs = Array.from(freqMap.entries());
    //sort by asc val in [key, val]
    pairs.sort((a,b)=>a[1] - b[1]);
    let cutCount = 0;
    let cutSet = 0;
    let target = Math.ceil(arr.length / 2);
    while (cutCount < target){
        let curr = pairs.pop();
        cutCount+= curr[1];
        cutSet++;
    }
    return cutSet;


};