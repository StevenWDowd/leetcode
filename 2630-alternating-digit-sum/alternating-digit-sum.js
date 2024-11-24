/**
 * @param {number} n
 * @return {number}
 */
var alternateDigitSum = function(n) {
    let isPos = true;
    let total = 0;
    let splitN = n.toString().split('');
    for (let char of splitN){
        let num = Number(char);
        if (isPos){
            total+= num;
        } else {
            total-= num;
        }
        isPos = !isPos;
    }
    return total;
    
};