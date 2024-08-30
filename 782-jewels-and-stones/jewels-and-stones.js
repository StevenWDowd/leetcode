/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    let jewelCount = 0;
    const jewelSet = new Set();
    for (let jewel of jewels){
        jewelSet.add(jewel);
    }
    for (let stone of stones){
        if (jewelSet.has(stone)) jewelCount++;
    }
    return jewelCount;
    
};