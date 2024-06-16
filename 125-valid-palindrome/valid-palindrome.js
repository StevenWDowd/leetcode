/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {

    let trimmed = s.replace(/[^0-9a-z]/gi, '');
    let lowerTrim = trimmed.toLowerCase();
    let left = 0;
    let right = lowerTrim.length - 1;
    while (left < right){
        let leftChar = lowerTrim[left];
        let rightChar = lowerTrim[right];
        if (leftChar !== rightChar){
            return false;
        }
        left++;
        right--;
    }
    return true;
    
};