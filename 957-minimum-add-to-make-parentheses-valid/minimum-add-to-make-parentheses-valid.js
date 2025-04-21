/**
 * @param {string} s
 * @return {number}
 */
var minAddToMakeValid = function(s) {
    if (!s.length) return 0;
    // const stack = [];
    // for (let char of s){
    //     stack.push(char);
    // }
    // let lefts = [];
    // let rights = [];
    // //all in one array?
    // //pop til find a match, put the rest back on?

    // while (stack.length){
    //     let curr = stack.pop();
    //     if (curr === '('){
    //         if (rights.length){
    //             rights.pop();
    //         } else {
    //             lefts.push(curr);
    //         }
    //     } else{
    //         if (lefts.length){
    //             lefts.pop();
    //         } else {
    //             rights.push(curr);
    //         }
    //     }
    // }
    // return lefts.length + rights.length;
    let chars = s.split('');
    let idx = 0;
    let lefts = 0;
    let lDxs = [];
    let cutDxs = new Set();
    while (idx < chars.length){
        let curr = chars[idx];
        if (curr === '('){
            lDxs.push(idx);
        } else {
            if (lDxs.length){
                let left = lDxs.pop();
                cutDxs.add(left);
                cutDxs.add(idx);
            }
        }
        idx++;
    }
    for (let i = 0; i < chars.length; i++){
        if (cutDxs.has(i)) chars[i] = '0';
    }
    let unpaired = 0;
    for (let char of chars){
        if (char !== '0') unpaired++;
    }
    return unpaired;

};