/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    const sMap = new Map();
    for (let char of s){
        if (sMap.has(char)){
            sMap.set(char, sMap.get(char) + 1);
        } else {
            sMap.set(char, 1);
        }
    }

    for (let char of t){
        if (!sMap.has(char)) return char;
        if (sMap.has(char)){
            let count = sMap.get(char);
            if (count < 1) return char;
            sMap.set(char, count - 1);
        }
    }

    return 'oops';
    
};