/**
 * @param {number} n
 * @return {boolean}
 */
var canWinNim = function(n) {
    //want to pass to opponent with 4 left
    //only lose if it's 4, 5, or 6, no?
    if (n % 4 === 0) return false
    return true

};