/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function(s) {
    const splitS = s.split(' ');
    splitS.sort((a,b) => a[a.length - 1] - b[b.length -1]);
    //console.log('sorted split: ', splitS);
    const final = [];
    for (let word of splitS){
        final.push(word.slice(0, word.length - 1));
    }
    return final.join(' ');
};