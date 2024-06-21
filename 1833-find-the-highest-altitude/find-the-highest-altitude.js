/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    let currentHighest = 0;
    let height = 0;
    for (let i = 0; i < gain.length; i++){
        height = height + gain[i];
        if (height > currentHighest) currentHighest = height;
    }
    return currentHighest;
    
};