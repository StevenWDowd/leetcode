/**
 * @param {number} x
 * @return {number}
 */
var sumOfTheDigitsOfHarshadNumber = function(x) {
    let digitSum = 0;
    let rem = x;
    while (rem > 9){
        let digit = rem % 10;
        rem = (rem - digit)/10;
        digitSum+= digit;
    }
    digitSum+= rem;
    if (x % digitSum === 0) return digitSum;
    return -1;


};