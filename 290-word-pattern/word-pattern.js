/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    //are s and pattern always the same legnth? have to be
    const splitString = s.split(" ");
    if (splitString.length !== pattern.length) return false;
    const patternMap = new Map();
    const mappedWords = new Map();
    for (let i = 0; i < pattern.length; i++){
        let letter = pattern[i];
        let word = splitString[i];
        let mapping = patternMap.get(letter);
        if (!mapping){
            if (mappedWords.get(word)) return false;
            patternMap.set(letter, word);
            mappedWords.set(word, true);
        } else if (word !== mapping){
            return false;
        }
    }
    return true;
    
};