/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function(words, x) {
    const hits = [];
    for (let i = 0; i < words.length; i++){
        if (words[i].includes(x)) hits.push(i);
    }
    return hits;
    
};