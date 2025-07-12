/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var countPrimeSetBits = function(left, right) {
    //upper bound 10^6 in binary:00110001001100000101111000110110
    //32 chars
    let primeSetNums = 0;
    const primes = new Set([2,3,5,7,11,13,17,19,23,29,31]);
    let num = left;
    while (num < right + 1){
        let binStr = num.toString(2);
        let count = 0;
        for (let char of binStr){
            if (char === '1') count++;
        }
        if (primes.has(count)) primeSetNums++;
        num++;
    }
    return primeSetNums;
};