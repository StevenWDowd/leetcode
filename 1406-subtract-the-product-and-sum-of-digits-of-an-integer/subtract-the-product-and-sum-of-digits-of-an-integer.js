/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    function splitDigs(num){
        let digs = [];
        while (num > 9){
            let rem = num % 10;
            num = (num - rem) / 10;
            digs.push(rem);
        }
        digs.push(num);
        return digs;
    }
    let pieces = splitDigs(n);
    let sum = 0;
    let prod = 1;
    for (let piece of pieces){
        sum+=piece;
        prod*=piece;
    }
    return prod - sum;
};