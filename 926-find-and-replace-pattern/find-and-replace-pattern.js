/**
 * @param {string[]} words
 * @param {string} pattern
 * @return {string[]}
 */
var findAndReplacePattern = function(words, pattern) {
    const matches = [];
    for (let word of words){
        if (canMatch(word, pattern)) matches.push(word);
    }
    return matches;
};

function canMatch(word, pattern){
    let wMap = new Map();
    let pMap = new Map();
    for (let i = 0; i < word.length; i++){
        let wChar = word[i];
        let pChar = pattern[i];
        if (!wMap.has(wChar)){
            wMap.set(wChar, pChar);
        } else {
            if (wMap.get(wChar) !== pChar) return false;
        }

        if (!pMap.has(pChar)){
            pMap.set(pChar, wChar);
        } else {
            if (pMap.get(pChar) !== wChar) return false;
        }
    }
    return true;
}