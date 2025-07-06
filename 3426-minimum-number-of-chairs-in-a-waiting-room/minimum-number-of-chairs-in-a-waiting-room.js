/**
 * @param {string} s
 * @return {number}
 */
var minimumChairs = function(s) {
    let waiters = 0;
    let max = 0;
    for (let char of s){
        if (char === 'E'){
            waiters++;
            if (waiters > max) max = waiters;
        }
        if (char === 'L'){
            waiters--;
            if (waiters < 0) waiters = 0;
        }
    }
    return max;
};