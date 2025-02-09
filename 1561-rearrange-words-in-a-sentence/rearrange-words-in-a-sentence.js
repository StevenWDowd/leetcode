/**
 * @param {string} text
 * @return {string}
 */
var arrangeWords = function(text) {
    let lower = text.toLowerCase();
    const textSplit = lower.split(' ');
    textSplit.sort((a,b) => a.length - b.length);
    let first = textSplit[0];
    let firstSplit = first.split('');
    firstSplit[0] = firstSplit[0].toUpperCase();
    textSplit[0] = firstSplit.join('');
    return textSplit.join(' ');

};