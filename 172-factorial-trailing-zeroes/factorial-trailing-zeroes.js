/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
    let zeroCounter = 0;

    for (let i = 5; Math.floor(n / i) >= 1; i*= 5){
        zeroCounter+= Math.floor(n / i);
    }
    return zeroCounter;
};