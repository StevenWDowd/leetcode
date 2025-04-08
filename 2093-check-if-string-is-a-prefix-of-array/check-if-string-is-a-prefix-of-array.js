/**
 * @param {string} s
 * @param {string[]} words
 * @return {boolean}
 */
var isPrefixString = function(s, words) {
    let prefix = '';
    for (let word of words){
        prefix = prefix.concat(word);
        if (prefix === s) return true;
    }
    return false;
    
};