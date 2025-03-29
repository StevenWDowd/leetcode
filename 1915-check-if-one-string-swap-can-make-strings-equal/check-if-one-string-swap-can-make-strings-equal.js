/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var areAlmostEqual = function(s1, s2) {
    //let diffCount = 0;
    let diffs = [];
    for (let i = 0; i < s1.length; i++){
        if (s1[i] !== s2[i]){
            diffs.push(i);
        }
    }
    if (diffs.length === 0) return true;
    if (diffs.length !== 2) return false;
    let diffSet = new Set();
    for (let idx of diffs){
        diffSet.add(s1[idx]);
    }
    for (let idx of diffs){
        if (!diffSet.has(s2[idx])) return false;
    }
    return true;
    
};