/**
 * @param {number} n
 * @return {boolean}
 */
var checkPowersOfThree = function(n) {
    const ternary = [];
    let num = n;
    while (num > 0){
        let rem = num % 3;
        num = Math.floor(num / 3);
        ternary.push(rem);
        //ternary will be in reverse, but we don't care
    }
    for (let num of ternary){
        if (num === 2) return false;
    }
    return true;
};