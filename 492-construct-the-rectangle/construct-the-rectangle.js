/**
 * @param {number} area
 * @return {number[]}
 */
var constructRectangle = function(area) {
    let wBound = Math.sqrt(area);
    let count = 1;
    let factor = 1; //largest factor, the width
    while (count <= wBound){
        if (area % count === 0 && count > factor) factor = count;
        count++;
    }
    let length = area / factor;
    return [length, factor];
};