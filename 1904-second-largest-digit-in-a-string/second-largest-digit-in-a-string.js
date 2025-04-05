/**
 * @param {string} s
 * @return {number}
 */
var secondHighest = function(s) {
    //don't feel like using regex
    const digSet = new Set(['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']);
    const numSet = new Set();
    for (let char of s){
        if (digSet.has(char)) numSet.add(Number(char));
    }
    const numArr = Array.from(numSet);
    if (numArr.length < 2) return -1;
    numArr.sort((a,b) => b-a);
    return numArr[1];
};