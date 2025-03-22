/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var minSteps = function(s, t) {
    //2 maps, count diff of character frequencies?
    const sMap = new Map();
    const tMap = new Map();
    for (let char of s){
        if (sMap.has(char)){
            sMap.set(char, sMap.get(char) + 1);
        } else {
            sMap.set(char, 1);
        }
    }

    
    for (let char of t){
        if (sMap.has(char)){
            if (sMap.get(char) > 0) sMap.set(char, sMap.get(char) - 1);
        }
    }
    let toChange = 0;
    for (let [char, freq] of sMap){
        toChange+= freq;
    }
    return toChange;
    
    
};