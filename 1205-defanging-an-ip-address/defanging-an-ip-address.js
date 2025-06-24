/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
    let nums = address.split('.');
    let ans = [];
    let count = 2;
    for (let num of nums){
        ans.push(num);
        if (count > -1) ans.push('[.]');
        count--;
    }
    return ans.join('');
    
};