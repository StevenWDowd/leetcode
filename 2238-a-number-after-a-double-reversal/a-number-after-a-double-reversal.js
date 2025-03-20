/**
 * @param {number} num
 * @return {boolean}
 */
var isSameAfterReversals = function(num) {
    let numStr = num.toString();
    let digs = numStr.split('');
    while (digs[digs.length - 1] === '0' && digs.length > 1) digs.pop();
    //rev1
    digs.reverse();
    //rev2
    digs.reverse();
    if (digs.join('') === numStr) return true;
    return false;
};