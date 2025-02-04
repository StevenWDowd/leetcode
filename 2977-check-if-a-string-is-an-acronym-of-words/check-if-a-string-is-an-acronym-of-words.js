/**
 * @param {string[]} words
 * @param {string} s
 * @return {boolean}
 */
var isAcronym = function(words, s) {
    const sArr = s.split('');
    if (words.length !== sArr.length) return false;
    for (let i = 0; i < words.length; i++){
        if (words[i][0] !== sArr[i]) return false;
    }
    return true;
};