/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    let current = 0;
    while (current < haystack.length){
        if (haystack[current] != needle[0]){
            current++;
        } else {
            let verdict = checkSlice(needle, haystack, current);
            if (verdict) {
                return current;
            } else {
                current++;
            }
        }
    }
    return -1;
    
};

function checkSlice(needle, haystack, startIdx){
    let current = startIdx;
    for (let i = 0; i < needle.length; i++){
        if (needle[i] !== haystack[current]){
            return false;
        }
        current++;
    }
    return true;

}