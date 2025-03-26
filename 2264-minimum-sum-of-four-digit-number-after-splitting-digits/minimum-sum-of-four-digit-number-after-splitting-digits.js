/**
 * @param {number} num
 * @return {number}
 */
var minimumSum = function(num) {
    let numStr = num.toString();
    let digits = numStr.split('');
    digits.sort((a,b) => a - b);
    let num1 = Number(digits[0].concat(digits[2]));
    let num2 = Number(digits[1].concat(digits[3]));
    return (num1 + num2);
};