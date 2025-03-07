/**
 * @param {string} palindrome
 * @return {string}
 */
var breakPalindrome = function(palindrome) {
    let ans = '';
    if (palindrome.length === 1) return ans;
    let idx = 0;
    let arr = palindrome.split('');
    while (idx < Math.floor(arr.length / 2) ){
        if (arr[idx] !== 'a'){
            arr[idx] = 'a';
            return arr.join('');
        }
        idx++;
    }
    arr[arr.length - 1] = 'b';
    return arr.join('');
    
};