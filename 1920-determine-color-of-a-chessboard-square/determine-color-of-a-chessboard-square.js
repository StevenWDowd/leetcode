/**
 * @param {string} coordinates
 * @return {boolean}
 */
var squareIsWhite = function(coordinates) {
    const blackOdd = new Set(['a', 'c', 'e', 'g']);
    let letter = coordinates[0];
    let num = Number(coordinates[1]);
    if (blackOdd.has(letter)){
        if (num % 2 === 1) return false;
        return true;
    } else {
        if (num % 2 === 0) return false;
        return true;
    }
};