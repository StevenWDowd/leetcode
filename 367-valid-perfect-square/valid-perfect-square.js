/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    //newton's method?
    let guess = 1;
    let avg = (guess + (num/guess)) / 2;
    let diff = Math.abs(guess - avg);
    while (diff >= (0.0001 * guess)){
        avg = (guess + (num/guess)) / 2;
        diff = Math.abs(guess - avg);
        guess = avg;
    }
    console.log("guess is: ", guess);
    //if (guess - Math.floor(guess) < 0.0001) return true;
    let rounded = Math.floor(guess);
    if (rounded * rounded === num) return true;
    return false;
};

const squares = new Set();