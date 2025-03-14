/**
 * @param {string} s
 * @return {boolean}
 */
var areNumbersAscending = function(s) {
    const myExp = /^(0|[1-9][0-9]*)$/;
    const nums = [];
    let split = s.split(' ');
    for (let word of split){
        if (myExp.test(word)) nums.push(Number(word));
    }
    let curr = 0;
    for (let num of nums){
        if (num <= curr) return false;
        curr = num;
    }
    
    return true;

};