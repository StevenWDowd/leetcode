/**
 * @param {string} s
 * @return {boolean}
 */
var checkZeroOnes = function(s) {
    let oneBest = 0;
    let zeroBest = 0;
    let idx = 1;
    let prev = 0;
    let count = 1;
    while (idx < s.length){
        let curr = s[idx];
        let last = s[prev];
        if (curr === last){
            count++;
        } else {
            if (last === '1'){
                if (count > oneBest) oneBest = count;
            } else {
                if (count > zeroBest) zeroBest = count;
            }
            count = 1;
        }
        idx++;
        prev++;
    }
    if (s[prev] === '1'){
        if (count > oneBest) oneBest = count;
    } else {
        if (count > zeroBest) zeroBest = count;
    }
    if (oneBest > zeroBest) return true;
    return false;

};