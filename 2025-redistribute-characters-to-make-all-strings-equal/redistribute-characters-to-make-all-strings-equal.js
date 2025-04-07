/**
 * @param {string[]} words
 * @return {boolean}
 */
var makeEqual = function(words) {
    //need all chars to be equally divisible among all entries
    //for n words, each char quantity must be >= n, and quant % n = 0
    const charMap = new Map();
    for (let word of words){
        for (let char of word){
            if (charMap.has(char)){
                charMap.set(char, charMap.get(char) + 1);
            } else {
                charMap.set(char, 1);
            }
        }
    }
    for (let [char, freq] of charMap){
        if (freq < words.length || freq % words.length !== 0) return false;
    }
    return true
    
};