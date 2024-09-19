/**
 * @param {string} s
 * @param {character} c
 * @return {number}
 */
var countSubstrings = function(s, c) {
    let count = 0;
    // let left = 0;
    // let right = 0;
    for (let char of s){
        if (char === c) count++;
    }
    return (count * (count + 1)) / 2;
    
};