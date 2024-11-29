/**
 * @param {number} n
 * @return {boolean}
 */
var isFascinating = function(n) {
    let nStr = n.toString();
    let str2 = (n * 2).toString();
    let str3 = (n*3).toString();
    const numSet = new Set();
    let fullStr = nStr.concat(str2.concat(str3));
    for (let char of fullStr){
        numSet.add(char);
    }
    if (numSet.has('0')) return false;
    //if (numSet.size > 9) return false;
    if (fullStr.length > 9) return false;
    for (let i = 1; i < 10; i++){
        if (!numSet.has(i.toString())) return false;
    }
    //console.log('full is: ', fullStr);
    //console.log(numSet);
    return true;
};