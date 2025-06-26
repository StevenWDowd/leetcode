/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function(s) {
    let parenMap = new Map([
        ['(', 0],
        [')', 0],
    ])
    let cutoffs = new Set();
    let init = s[0];
    parenMap.set(init, parenMap.get(init) + 1);
    for (let i = 1; i < s.length; i++){
        let curr = s[i];
        parenMap.set(curr, parenMap.get(curr) + 1);
        if (parenMap.get('(') === parenMap.get(')')) cutoffs.add(i);
    }
    //each cutoff is the last idx of a primitive
    //at such an index, exclude it, then exclude the next char (start of next prim)
    let final = [];
    for (let i = 1; i < s.length; i++){
        let curr = s[i];
        if (cutoffs.has(i)){
            //don't add
            i++;
        } else {
            final.push(curr);
        }
    }
    console.log('parenMap is: ', parenMap);
    console.log('cutoffs is: ', cutoffs);
    return final.join('');

};