/**
 * @param {string} s
 * @return {character}
 */
var repeatedCharacter = function(s) {
    const charSet = new Set();
    let ans = '';
    for (let char of s){
        if (charSet.has(char)){
            return char;
        } else {
            charSet.add(char);
        }
    }
    return ans;
};