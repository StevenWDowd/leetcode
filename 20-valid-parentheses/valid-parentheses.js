/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let idx = 0;
    const leftDict = {
        "[":"]",
        "(":")",
        "{":"}",
    };
    const rightDict = {
        "]":"[",
        ")":"(",
        "}":"{",
    };
    const paraStack = [];
    while (idx < s.length){
        let current = s[idx];
        if (leftDict[current]){
            paraStack.push(current);
        }
        if (rightDict[current] && paraStack.length === 0){
            return false;
        }
        if (rightDict[current]){
            let leftSide = paraStack.pop();
            if (leftDict[leftSide] !== current) return false;
        }
        idx++;
    }
    if (paraStack.length > 0) return false;
    return true;
    
};