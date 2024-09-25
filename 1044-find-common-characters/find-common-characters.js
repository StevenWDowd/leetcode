/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function(words) {
    const commons = [];
    const chars = new Set();
    for (let word of words){
        for (let char of word){
            chars.add(char);
        }
    }

    const wordMaps = [];
    for (let word of words){
        let freqMap = new Map();
        for (let char of word){
            if (!freqMap.has(char)){
                freqMap.set(char, 1);
            } else {
                freqMap.set(char, freqMap.get(char) + 1);
            }
        }
        wordMaps.push(freqMap);
    }

    for (let char of chars){
        let isPresent = true;
        let firstMap = wordMaps[0];
        let lowCount = firstMap.get(char);
        if (!lowCount) isPresent = false;
        let idx = 1;
        while (isPresent && idx < wordMaps.length){
            let currMap = wordMaps[idx];
            let currCount = currMap.get(char);
            if (!currCount) isPresent = false;
            if (currCount < lowCount) lowCount = currCount;
            idx++;
        }
        if (isPresent){
            while (lowCount > 0){
                commons.push(char);
                lowCount--;
            }
        }
    }
    return commons;
    
    
};