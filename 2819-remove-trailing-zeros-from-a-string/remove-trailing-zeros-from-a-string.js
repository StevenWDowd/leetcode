/**
 * @param {string} num
 * @return {string}
 */
var removeTrailingZeros = function(num) {
    let idx = num.length - 1;
    let curr = num[idx];
    while (curr === '0'){
        idx--;
        curr = num[idx];
    }
    return num.slice(0, idx + 1);
};