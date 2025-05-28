/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
    const row1 = new Set(['q','w','e','r','t','y','u','i','o','p']);
    const row2 = new Set(['a','s','d','f','g','h','j','k','l']);
    const row3 = new Set(['z','x','c','v','b','n','m']);
    const singles = [];
    for (let word of words){
        let firsts = [];
        let seconds = [];
        let thirds = [];
        let lower = word.toLowerCase();
        for (let char of lower){
            if (row1.has(char)) firsts.push(char);
            if(row2.has(char)) seconds.push(char);
            if(row3.has(char)) thirds.push(char);
        }
        if (firsts.length === lower.length || seconds.length === lower.length ||
            thirds.length === lower.length){
                singles.push(word);
            }
    }
    return singles;
};