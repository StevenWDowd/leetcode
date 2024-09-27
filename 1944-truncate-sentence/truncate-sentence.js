/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function(s, k) {
    const splitAndCut = s.split(' ').slice(0, k);
    return splitAndCut.join(' ');
};