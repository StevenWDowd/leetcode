/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function(s) {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
    let idx1 = 0;
    let idx2 = s.length / 2;
    let lCount = 0;
    let rCount = 0;
    while (idx2 < s.length){
        let first = s[idx1];
        let second = s[idx2];
        if (vowels.has(first)) lCount++;
        if (vowels.has(second)) rCount++;
        idx1++;
        idx2++;
    }
    return lCount === rCount;
};