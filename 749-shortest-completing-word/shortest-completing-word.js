/**
 * @param {string} licensePlate
 * @param {string[]} words
 * @return {string}
 */
var shortestCompletingWord = function(licensePlate, words) {
    const plateMap = new Map();
    let numExp = /[0-9]/
    for (let char of licensePlate){
        if (char !== ' ' && !numExp.test(char)){
            let current = char.toLowerCase();
            if (plateMap.has(current)){
                plateMap.set(current, plateMap.get(current) + 1);
            } else {
                plateMap.set(current, 1);
            }
        }
    }
    //console.log('platemap is: ', plateMap);
    let currWord;
    for (let word of words){
        let wordMap = new Map();
        for (let char of word){
            if (wordMap.has(char)){
                wordMap.set(char, wordMap.get(char) + 1);
            } else {
                wordMap.set(char, 1);
            }
        }
        let match = true;
        for (let [char, freq] of plateMap){
            if (wordMap.has(char)){
                if (wordMap.get(char) >= freq){
                    //do nothing, I guess
                } else {match = false;}
            } else {
                match = false;
            }
        }
        if (match){
            if (!currWord){
                currWord = word;
            } else {
                if (currWord.length > word.length){
                    currWord = word;
                }
            }
        }
    }
    return currWord;
    
};