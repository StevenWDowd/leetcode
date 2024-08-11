/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
    let lowered = word.toLowerCase();
    let reupped = lowered.toUpperCase();
    let firstChar = word[0];
    let lowSlice = lowered.slice(1);
    let newWord = firstChar + lowSlice;

    if (word === lowered || word === reupped || word === newWord) return true;

    return false;
};