/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
    let missCount = 0;
    const heightsCopy = [...heights];
    let expected = heightsCopy.sort((a,b) => a-b);
    //console.log('expected is: ', expected);
    for (let i = 0; i < heights.length; i++){
        let current = heights[i];
        let ideal = expected[i];
        if (current !== ideal) missCount++;
    }
    return missCount;
};