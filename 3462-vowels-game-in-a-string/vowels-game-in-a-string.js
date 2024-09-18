/**
 * @param {string} s
 * @return {boolean}
 */
var doesAliceWin = function(s) {
    //alice should try to maintain an odd number of vowels?
    let vowelCount = 0;
    for (let char of s){
        if (vowelDict[char]) vowelCount++;
    }
    if (vowelCount === 0) return false;
    if (vowelCount % 2 !== 0) return true;
    //Alice can't lose, right? just leave one vowel in the remaining string
    return true;
};

const vowelDict = {
    'a':true,
    'e':true,
    'i':true,
    'o':true,
    'u':true,
}