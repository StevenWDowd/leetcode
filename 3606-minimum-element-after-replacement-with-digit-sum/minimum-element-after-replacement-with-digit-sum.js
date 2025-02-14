/**
 * @param {number[]} nums
 * @return {number}
 */
var minElement = function(nums) {
    const summed = [];
    for (let num of nums){
        summed.push(sumDigs(num));
    }
    summed.sort((a,b) => a - b);
    return summed[0];
};

function sumDigs(num){
    let sum = 0;
    while (num > 9){
        let rem = num % 10;
        num = (num - rem) / 10;
        sum+= rem;
    }
    sum+= num;
    return sum;
}