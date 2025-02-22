/**
 * @param {string[]} strs
 * @return {number}
 */
var maximumValue = function(strs) {
    const numExp = /[0-9]/
    let max = 0;
    for (let str of strs){
        let allNums = true;
        for (let char of str){
            if (!numExp.test(char)) allNums = false;
            let val;
            if (allNums){
                val = Number(str);
            } else {
                val = str.length;
            }
            if (val > max) max = val;
        }
    }
    return max;

    
};