/**
 * @param {string} s
 * @return {boolean}
 */
var checkOnesSegment = function(s) {
    let hitZero = false;
    let idx = 0;
    while (idx < s.length){
        let curr = s[idx];
        if (curr === '0'){
            hitZero = true;
        }
        if (curr === '1'){
            if (hitZero) return false;
        }
        idx++;
    }
    return true;
};