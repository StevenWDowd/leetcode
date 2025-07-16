/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
    let arr = s.split('');
    let test = isPalindrome(arr, 0, s.length - 1);
    if (test[2]) return true;
    let lMiss = test[0];
    let rMiss = test[1];
    console.log('lMiss is: ', lMiss);
    console.log('rMiss is: ', rMiss);
    return (isPalindrome(arr, lMiss, rMiss - 1)[2] || isPalindrome(arr, lMiss+1, rMiss)[2]);

    // let charMap = new Map();
    // for (let char of s){
    //     if (charMap.has(char)){
    //         charMap.set(char, charMap.get(char)+1);
    //     } else {
    //         charMap.set(char, 1);
    //     }
    // }
    // let oddCount = 0;
    // let oneCount = 0;

    // for (let [char, freq] of charMap){
        
    // }
    // let left = 0;
    // let right = s.length - 1;
    // while (left < right){
        
    // }
};

function isPalindrome(s, start, end){
    // if (Math.abs(start - end) === 1){
    //     if (s[start] !== s[end]){
    //         return false;
    //     } else {
    //         return true;
    //     }
    // }
    let left = start;
    let right = end;
    while (left < right){
        if (s[left] !== s[right]) return [left, right, false];
        left++;
        right--;
    }
    return [left, right, true];
}