/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function(candyType) {
    let candySet = new Set();
    for (let type of candyType){
        candySet.add(type);
    }
    let max = candyType.length / 2;
    return Math.min(max, candySet.size);
};