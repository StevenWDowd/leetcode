/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let num = n;
    //console.log('sum is: ', squareSum(num));
    let sumSet = new Set();
    while (num !== 1){
        num = squareSum(num);
        if (sumSet.has(num)) return false;
        sumSet.add(num);
    }
    return true;

};

function squareSum(num){
    let sum = 0;
    while (num > 9){
        let dig = num % 10;
        sum+= dig*dig;
        num = (num - dig) / 10;
    }
    sum+= num*num;
    return sum;
}
