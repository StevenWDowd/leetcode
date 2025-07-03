/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
    let best = 0;
    for (let sent of sentences){
        let words = sent.split(' ');
        if (words.length > best) best = words.length;
    }
    return best;
};