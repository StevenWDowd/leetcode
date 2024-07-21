/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    if (n === 0) return false;
    if (n === 1) return true;
    let current = n;
    while (current % 3 === 0){
        current = current / 3
    }
    return current === 1;
    // let current = 0;

    // while (current < Math.ceil(n/3)){ 
    // }
    // for (let i = 0; i <= Math.ceil(n/3); i++){
    //     if (3**i === n) return true;
    // }
    // return false;
};