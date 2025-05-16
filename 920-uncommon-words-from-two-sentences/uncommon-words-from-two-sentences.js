/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function(s1, s2) {
    const uncommons = [];
    const map1 = new Map();
    const map2 = new Map();
    let words1 = s1.split(' ');
    let words2 = s2.split(' ');
    for (let word of words1){
        if (map1.has(word)){
            map1.set(word, map1.get(word) + 1);
        } else {
            map1.set(word, 1);
        }
    }

    for (let word of words2){
        if (map2.has(word)){
            map2.set(word, map2.get(word) + 1);
        } else {
            map2.set(word, 1);
        }
    }
    for (let [word, freq] of map1){
        if(!(map2.has(word)) && freq === 1) uncommons.push(word);
    }
    for (let [word, freq] of map2){
        if (!map1.has(word) && freq === 1) uncommons.push(word);
    }
    return uncommons
};