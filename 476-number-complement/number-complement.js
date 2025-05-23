/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
    let bin = num.toString(2);
    //console.log(bin);
    const comp = [];
    for (let char of bin){
        if (char === '1'){
            comp.push('0');
        } else {
            comp.push('1')
        }
    }
    const compZip = comp.join('');

    return parseInt(compZip, 2);
};