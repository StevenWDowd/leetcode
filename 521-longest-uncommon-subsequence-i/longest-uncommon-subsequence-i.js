/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
var findLUSlength = function(a, b) {
    //let best = -1;
    if (a === b) return -1;
    if (a.length > b.length){
        return a.length;
    } else {
        return b.length;
    }
    
};