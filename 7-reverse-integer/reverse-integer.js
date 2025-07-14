/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let isNeg = (x < 0);
    if (isNeg) x = x * -1;
    const digits = [];
    while (x > 9){
        let rem = x % 10;
        x = (x - rem) / 10;
        digits.push(rem);
    }
    digits.push(x);
    let final = digits[0];
    let idx = 1;
    while (idx < digits.length){
        final = (final * 10) + digits[idx];
        idx++;
        if (final > 2**31) return 0;
    }
    if (isNeg) final*= -1;
    return final;

};