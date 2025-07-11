/**
 * @param {number} n
 * @return {boolean}
 */
var hasAlternatingBits = function(n) {
    let binStr = n.toString(2);
    let idx = 0;
    while (idx < binStr.length - 1){
        let curr = binStr[idx];
        let next = binStr[idx + 1];
        if (curr === next) return false;
        idx++;
    }
    return true;
};