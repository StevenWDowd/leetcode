/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function(word1, word2) {
    if (word1.length !== word2.length){
        return false;
    }
    const counter1 = {};
    const counter2 = {};

    for (let char of word1){
        counter1[char] = counter1[char] + 1 | 1;
    }

    for (let char of word2){
        counter2[char] = counter2[char] + 1 | 1;
    }

    for (let char of word1){
        let freq = counter2[char];
        if (!freq) return false;
    }

    let freqArr1 = Object.values(counter1).sort(function(a,b){return a-b});
    let freqArr2 = Object.values(counter2).sort(function(a,b){return a-b});

    for (let i = 0; i < freqArr1.length; i++){
        if (freqArr1[i] !== freqArr2[i]) return false;
    }

    return true;
    
    
};