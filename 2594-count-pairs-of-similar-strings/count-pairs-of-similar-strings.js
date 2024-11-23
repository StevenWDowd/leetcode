/**
 * @param {string[]} words
 * @return {number}
 */
var similarPairs = function(words) {
    let pairCount = 0;
    const setMap = new Map();
    for (let word of words){
        let wordSet = new Set();
        for (let char of word){
            wordSet.add(char);
        }
        setMap.set(word, wordSet);
    }
    for (let i = 0; i < words.length - 1; i++){
        let curr = words[i];
        for (let j = i+1; j < words.length; j++){
            let second = words[j];
            if (compSets(setMap.get(curr), setMap.get(second))) pairCount++;
        }
    }
    return pairCount;
};

function compSets(set1, set2){
    for (let [key, val] of set1){
        if (!set2.has(key)) return false;
    }
    for (let [key, val] of set2){
        if (!set1.has(key)) return false;
    }
    return true;
}