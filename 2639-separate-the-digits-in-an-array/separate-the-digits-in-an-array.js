/**
 * @param {number[]} nums
 * @return {number[]}
 */
var separateDigits = function(nums) {
    const answer = [];
    for (let num of nums){
        let digs = [];
        while (num > 9){
            let rem = num % 10;
            digs.push(rem);
            num = (num - rem) / 10;
        }
        digs.push(num);
        while (digs.length){
            answer.push(digs.pop());
        }
    }
    return answer;
};