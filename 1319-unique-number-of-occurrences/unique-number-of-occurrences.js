/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    const freqCounter = {};
    for (let num of arr){
        freqCounter[num] = freqCounter[num] + 1 | 1;
    }
    let freqVals = Object.values(freqCounter);
    let valSet = new Set(freqVals);
    if (valSet.size !== freqVals.length){
        return false;
    }
    return true;
    
};