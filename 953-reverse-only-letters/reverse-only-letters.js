/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function(s) {
    let left = 0;
    let right = s.length - 1;
    const sArr = s.split('');
    while (left < right){
        let lChar = sArr[left];
        let rChar = sArr[right];
        if (isLetter(lChar) && isLetter(rChar)){
            sArr[left] = rChar;
            sArr[right] = lChar;
            left++;
            right--;
        } else if (!isLetter(lChar)){
            left++;
        } else if (!isLetter(rChar)){
            right--;
        }
        
    }
    return sArr.join('');
};

function isLetter(char){
    return (/[a-zA-Z]/).test(char);
}