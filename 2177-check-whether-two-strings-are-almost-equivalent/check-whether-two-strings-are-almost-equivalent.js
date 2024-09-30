/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var checkAlmostEquivalent = function(word1, word2) {
    const map1 = new Map();
    const map2 = new Map();
    for (let char of word1){
        if (map1.has(char)){
            map1.set(char, map1.get(char) + 1);
        } else {
            map1.set(char, 1);
        }
    }

    for (let char of word2){
        if (map2.has(char)){
            map2.set(char, map2.get(char) + 1);
        } else {
            map2.set(char, 1);
        }
    }

    for (let char of word1){
        let oneCount = map1.get(char);
        if (!oneCount) oneCount = 0;
        let twoCount = map2.get(char);
        if (!twoCount) twoCount = 0;
        if (Math.abs(oneCount - twoCount) > 3) return false;
    }

    for (let char of word2){
        let oneCount = map1.get(char);
        if (!oneCount) oneCount = 0;
        let twoCount = map2.get(char);
        if (!twoCount) twoCount = 0;
        if (Math.abs(oneCount - twoCount) > 3) return false;
    }

    return true;
};