/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];
    //build up stack, if at any time the last three elements are abc, pop em off
    let idx = 0;
    while (idx < s.length){
        stack.push(s[idx]);
        checkSub(stack);
        idx++;
    }
    //checkSub(stack);
    if (stack.length > 0) return false;
    return true;

};

function checkSub(arr){
    if (arr.length > 2){
        let last = arr.pop();
        let secLast = arr.pop();
        let thirdLast = arr.pop();
        if (last === 'c' && secLast === 'b' && thirdLast === 'a'){
            //do nothing
        } else {
            arr.push(thirdLast);
            arr.push(secLast);
            arr.push(last);
        }
    }
}