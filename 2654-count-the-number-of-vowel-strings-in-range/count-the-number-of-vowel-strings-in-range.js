/**
 * @param {string[]} words
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var vowelStrings = function(words, left, right) {
    const vowSet = new Set(['a', 'e', 'i', 'o', 'u']);
    let count = 0;
    for (let i = left; i < right + 1; i++){
        let curr = words[i];
        if (vowSet.has(curr[0]) && vowSet.has(curr[curr.length - 1])) count++;
    }
    return count;
};