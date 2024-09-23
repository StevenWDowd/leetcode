/**
 * @param {string} s
 * @return {string}
 */
var lastNonEmptyString = function(s) {
    // const indexMap = new Map();
    // for (let i = 0; i < s.length; i++){
    //     indexMap.set(i, true);
    // }
    let highScore = 0;
    const freqCounter = new Map();
    for (let char of s){
        if (freqCounter.has(char)){
            freqCounter.set(char, freqCounter.get(char) + 1)
        } else {
            freqCounter.set(char, 1);
        }
        if (freqCounter.get(char) > highScore) highScore = freqCounter.get(char);
    }

    const mostFrequent = new Set();
    for (let [key, val] of freqCounter){
        if (val === highScore) mostFrequent.add(key);
    }
    let idx = s.length - 1;
    const lastArr = [];
    while (mostFrequent.size > 0 && idx > -1){
        let current = s[idx];
        if (mostFrequent.has(current)){
            lastArr.push(current);
            mostFrequent.delete(current)
        }
        idx--;
    }
    lastArr.reverse();
    return lastArr.join('');
    // for (let i = s.length - 1; i > -1; i--){

    // }

    // for each char with highest frequency, go from back of string

    // let operating = true;
    // if (checkFreqs(freqCounter)) operating = false;
    // while (operating){
    //     let charSet = new Set();
    //     for (let i = 0; i < s.length; i++){
    //         if (indexMap.get(i)){
    //         let current = s[i];
    //         if (!charSet.has(current)){
    //             freqCounter.set(current, freqCounter.get(current) - 1);
    //             charSet.add(current);
    //             indexMap.set(i, false);
    //         }
    //         //possible shortcircuit
    //         if (charSet.size === freqCounter.size) i = s.length;
    //         }
    //     }
    //     //check if any frequencies are above 1
    //     if (checkFreqs(freqCounter)) operating = false;
    // }
    // console.log('freqCounter is now: ', freqCounter);
    // const finalArr = [];
    // for (let i = 0; i < s.length; i++){
    //     if (indexMap.get(i)) finalArr.push(s[i]);
    // }

    // return finalArr.join('');
};

//checks if any entry of a frequencey counter has a val above 1
function checkFreqs(map){
    for (let [key, val] of map){
        if (val > 1) return false;
    }
    return true;
}