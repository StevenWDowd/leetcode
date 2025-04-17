/**
 * @param {number[]} arr
 * @return {boolean}
 */
var threeConsecutiveOdds = function(arr) {
    let odds = [];
    let idx = 0;
    while (idx < arr.length){
        let curr = arr[idx];
        if (curr % 2 === 1){
            odds.push(curr);
            if (odds.length > 2) return true;
        } else {
            odds = [];
        }
        idx++;
    }
    return false;
};