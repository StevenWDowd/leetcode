/**
 * @param {string} s
 * @return {string}
 */
var findValidPair = function(s) {
    const freqMap = new Map();
    for (let str of s){
        if (freqMap.has(str)){
            freqMap.set(str, freqMap.get(str) + 1);
        } else {
            freqMap.set(str, 1);
        }
    }
    let ans = '';

    for (let i = 0; i < s.length - 1; i++){
        let first = s[i];
        let second = s[i+1];
        if (first !== second){
            let numOne = Number(first);
            let numTwo = Number(second);
            if (freqMap.get(first) === numOne && freqMap.get(second) === numTwo){
                if (ans === '') ans = first.concat(second);
                break;
            }
        }
    }
    return ans;
};