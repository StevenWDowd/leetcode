/**
 * @param {string} word
 * @return {number}
 */
var numberOfSpecialChars = function(word) {
    let sCount = 0;
    const lowers = new Set();
    const uppers = new Set();
    const highCase = new RegExp("[A-Z]");
    for (let char of word){
        if (highCase.test(char)){
            uppers.add(char);
        } else {
            lowers.add(char);
        }
    }
    for (let char of lowers){
        if (uppers.has(char.toUpperCase())) sCount++;
    }
    //console.log('lowers are: ', lowers);
    //console.log('uppers are: ', uppers);
    return sCount;
};