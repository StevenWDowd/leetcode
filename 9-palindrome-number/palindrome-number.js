/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0){
        return false;
    }
    let input = x;
    const digits = [];
    while (input >= 10){
        let remainder = input % 10;
        digits.push(remainder);
        input = (input - remainder) / 10;
    }
    digits.push(input);
    let left = 0;
    let right = digits.length - 1;
    let isPalindrome = true;
    while (left < right){
        if (digits[left] !== digits[right]){
            isPalindrome = false;
        }
        left++;
        right--;
    }
    return isPalindrome;
    
};