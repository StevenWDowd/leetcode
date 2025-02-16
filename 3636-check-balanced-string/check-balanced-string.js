/**
 * @param {string} num
 * @return {boolean}
 */
var isBalanced = function(num) {
    let numArr = num.toString().split('');
    let evens = 0;
    let odds = 0;
    for (let i = 0; i < numArr.length; i++){
        let curr = Number(numArr[i]);
        if (i % 2 === 0){
            evens = evens + curr;
        } else {
            odds = odds + curr;
        }
    }
    return evens === odds? true : false;
};