/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    const words = s.split(' ');
    const final = [];
    for (let word of words){
        let chars = word.split('');
        chars.reverse();
        final.push(chars.join(''));
    }
    return final.join(' ');
};