/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
    let matches = [];
    for (let i = left; i < right + 1; i++){
        let divisors = splitDigs(i);
        let isMatch = true;
        for (let div of divisors){
            if (div === 0) isMatch = false;
            if (i % div !== 0) isMatch = false;
        }
        if (isMatch) matches.push(i);
    }
    return matches;
    
};

function splitDigs(num){
    const digs = [];
    while (num > 9){
        let rem = num % 10;
        num = (num - rem) / 10;
        digs.push(rem);
    }
    digs.push(num);
    return digs;
}