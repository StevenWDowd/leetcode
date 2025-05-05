/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {

    function addUp(num){
        let digs = [];
        while (num > 9){
            let rem = num % 10;
            num = (num - rem) / 10;
            digs.push(rem);
        }
        digs.push(num);
        let sum = 0;
        //console.log('digs is: ', digs);
        for (let dig of digs){
            sum+= dig;
        }
        return sum;
    }
    while (num > 9){
        num = addUp(num);
        //console.log('num is now: ', num);
    }
    return num;
};