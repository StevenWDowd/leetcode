/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findLeastNumOfUniqueInts = function(arr, k) {
    const numMap = new Map();
    for (let num of arr){
        if (numMap.has(num)){
            numMap.set(num, numMap.get(num) + 1);
        } else {
            numMap.set(num, 1);
        }
    }
    const freqs = Array.from(numMap.values());
    freqs.sort((a,b) => b - a);
    //console.log('freqs is: ', freqs);

    while (k > 0 && freqs.length > 0){
        let last = freqs[freqs.length - 1];
        while (last > 0 && k > 0){
            last--;
            k--;
        }
        if (last === 0) freqs.pop();
    }
    return freqs.length;
};