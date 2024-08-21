/**
 * @param {string} s
 * @return {string}
 */
var toLowerCase = function(s) {
    const splitS = s.split('');
    for (let i = 0; i < splitS.length; i++){
        splitS[i] = splitS[i].toLowerCase();
    }
    return splitS.join('');
};