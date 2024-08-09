/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let left = 0;
    let right = s.length - 1;
    while (left < right){
        let leftChar = s[left];
        let rightChar = s[right];
        s[right] = leftChar;
        s[left] = rightChar;
        left++;
        right --;
    }

    return s;
    
};