/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    //each pass, check letters at that index
    //if we ever find one that does not match, we've hit the end
    //take first element, slice 0 to idx-1 to get prefix

    let currentIdx = 0;
    let foundDiff = false;
    while (!foundDiff){
        const letterSet = new Set();
        for (let i = 0; i< strs.length; i++){
            let targetChar = strs[i][currentIdx];
            if (!targetChar){
                foundDiff = true;
            }
            letterSet.add(targetChar);    
        }
        if (letterSet.size > 1) {
            foundDiff = true;
        }
        currentIdx++;
    }

    return strs[0].slice(0, currentIdx - 1);
    
};