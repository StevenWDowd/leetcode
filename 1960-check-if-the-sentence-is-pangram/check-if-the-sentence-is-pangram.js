/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
    let chars = sentence.split('');
    let charSet = new Set(chars);
    let sorted = [];
    for (let [key, val] of charSet){
        sorted.push(key);
    }
    //sorted.sort((a,b) => a > b);
    sorted.sort();
    //console.log('chars is: ', chars);
    //console.log('charSet is: ', charSet);
    //console.log('sorted is: ', sorted);
    if (sorted.length !== 26) return false;
    //must be strictly increasing
    for (let i = 1; i < 26; i++){
        if (sorted[i] <= sorted[i-1]) return false;
    }
    return true;

};