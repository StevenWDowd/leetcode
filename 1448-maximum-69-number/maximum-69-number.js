/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number  = function(num) {
    //change leftmost 6 to a 9, yeah?
    //working with a string is the easiest way for sure
    const numArr = num.toString().split('');
    let found = false;
    let idx = 0;
    while (!found && idx < numArr.length){
        let current = numArr[idx];
        if (current === '6'){
            numArr[idx] = '9';
            found = true;
        }
        idx++;
    }
    return Number(numArr.join(''));
};