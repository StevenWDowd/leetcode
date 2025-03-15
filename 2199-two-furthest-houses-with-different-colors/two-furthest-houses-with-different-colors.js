/**
 * @param {number[]} colors
 * @return {number}
 */
var maxDistance = function(colors) {
    //compare: leftmost to rightmost, move pointer left until diff color
    //2nd pointer, compare rightmost to left, move pointer right
    //take max of those two values
    let fromLeft = 0;
    let fromRight = 0;
    let lDex = 0;
    let rDex = colors.length - 1;
    let first = colors[0];
    let last = colors [colors.length - 1];
    while (rDex > 0){
        let curr = colors[rDex];
        if (curr !== first){
            fromLeft = Math.abs(0 - rDex);
            break;
        }
        rDex--;
    }

    while (lDex < colors.length - 1){
        let curr = colors[lDex];
        if (curr !== last){
            fromRight = (colors.length - 1 - lDex);
            break;
        }
        lDex++;
    }

    return Math.max(fromRight, fromLeft);
};