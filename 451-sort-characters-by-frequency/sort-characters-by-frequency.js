/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    const freqCounter = new Map();
    for (let char of s){
        if (freqCounter.has(char)){
            freqCounter.set(char, freqCounter.get(char) + 1);
        } else {
            freqCounter.set(char, 1);
        }
    }

    const sorted = Array.from(freqCounter.entries()).sort((a, b) => b[1] - a[1]);
    //const chars = sorted.map((a) => a[0]);
    const chars = [];
    for (let pair of sorted){
        let char = pair[0];
        let count = pair[1];
        while (count > 0){
            chars.push(char);
            count--;
        }
    }
    return chars.join('');
};