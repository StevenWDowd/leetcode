/**
 * @param {number} num
 * @return {string}
 */
var convertToBase7 = function(num) {
    const base7 = [];
    let isNeg = false;
    if (num === 0) return '0';
    if (num < 0){
        num*=-1;
        isNeg = true;
    }
    while (num > 0){
        let dig = (num % 7);
        num = Math.floor(num / 7);
        base7.push(dig.toString());
    }
    if (isNeg) base7.push('-');
    return base7.reverse().join('');

};