/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    const freqMap = new Map();
    for (let char of s){
        if (freqMap.has(char)){
            let current = freqMap.get(char);
            freqMap.set(char, current + 1);
        } else {
            freqMap.set(char, 1);
        }
    }
    for (let i = 0; i < s.length; i++){
        let currChar = s[i];
        let freq = freqMap.get(currChar);
        if (freq === 1) return i;
    }
    return -1;
};