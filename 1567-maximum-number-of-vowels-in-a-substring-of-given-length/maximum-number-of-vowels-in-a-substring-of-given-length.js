/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) {
    const vowelDict = new Map([
        ['a', true],
        ['e', true],
        ['i', true],
        ['o', true],
        ['u', true],
    ])
    let left = 0;
    let right = k-1;
    let highScore = 0;
    let total = 0;
    for (let i = 0; i < k; i++){
        if (vowelDict.has(s[i])) total++;
    }
    if (total > highScore) highScore = total;
    while (right < s.length - 1){
        if (vowelDict.has(s[left])) total--;
        left++;
        right++;
        if (vowelDict.has(s[right])) total++;
        if (total > highScore) highScore = total;
    } 
    return highScore;
};