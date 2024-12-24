/**
 * @param {string} s
 * @return {string}
 */
var greatestLetter = function(s) {
    const lowers = new Set();
    const uppers = new Set();
    let ans = '';
    for (let char of s){
        if (isUpperCase(char)){
            uppers.add(char);
        } else {
            lowers.add(char.toUpperCase());
        }
    }
    for (let char of uppers){
        if (!lowers.has(char)) uppers.delete(char);
    }

    for (let char of uppers){
        if (char > ans) ans = char;
    }
    return ans;
};

function isUpperCase(char){
    if (char.toUpperCase() === char) return true;
    return false;
}