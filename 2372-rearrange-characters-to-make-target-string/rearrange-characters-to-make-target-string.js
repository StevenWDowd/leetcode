/**
 * @param {string} s
 * @param {string} target
 * @return {number}
 */
var rearrangeCharacters = function(s, target) {
    let count = 0;
    const sMap = new Map();
    let zeroFound = false;
    for (let char of s){
        if (sMap.has(char)){
            sMap.set(char, sMap.get(char) + 1);
        } else {
            sMap.set(char, 1);
        }
    }
    while (!zeroFound){
        for (let char of target){
            if (!sMap.has(char) || sMap.get(char) === 0){
                zeroFound = true;
                //return count;
            } else {
                sMap.set(char, sMap.get(char) - 1);
            }
        }
        if (!zeroFound) count++;
    }
    return count;
    
};