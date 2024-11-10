/**
 * @param {number[]} position
 * @return {number}
 */
var minCostToMoveChips = function(position) {
    //how many indices must move from even to odd or vice versa?
    //count num of odds, num of evens, return the lower num?
    let odds = 0;
    let evens = 0;
    for (let num of position){
        if (num % 2 === 0){
            evens++;
        } else {
            odds++;
        }
    }
    return Math.min(odds, evens);

};