/**
 * @param {string} s
 * @return {boolean}
 */
var checkString = function(s) {
    let bFound = false;
    let idx = 0;
    while (idx < s.length){
        let curr = s[idx];
        if (curr === 'b') bFound = true;
        if (bFound && curr !== 'b') return false;
        idx++;
    }
    return true;
};