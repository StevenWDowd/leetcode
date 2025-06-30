/**
 * @param {string[]} words
 * @return {string[]}
 */
var stringMatching = function(words) {
    let subs = new Set();
    for (let i = 0; i < words.length; i++){
        let curr = words[i];
        for (let j = 0; j < words.length; j++){
            let superStr = words[j];
            if (i !== j && superStr.length +1 > curr.length){
                //console.log('curr is: ', curr);
                //console.log('superStr is: ', superStr);
                //let superStr = words[j];
                if (isSub(superStr, curr)) subs.add(curr);
            }
        }
    }
    return Array.from(subs);
};

function isSub(long, short){
    for (let i = 0; i < long.length; i++){
        if (long[i] === short[0] && long.length - i >= short.length){
            let idx1 = i;
            let idx2 = 0;
            let match = true;
            while (match && idx1 < long.length && idx2 < short.length){
                if (long[idx1] !== short[idx2]) match = false;
                idx1++;
                idx2++;
            }
            if (match) return true;
        }
    }
    return false;
}