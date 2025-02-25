/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function(nums) {
    let sum = 0;
    let digits = 0;
    for (let num of nums){
        sum+= num;
        digits+= digiSum(num);
    }
    //console.log('sum is: ', sum);
    //console.log('digits is: ', digits);
    return Math.abs(sum - digits);
};

function digiSum(num){
    let sum = 0;
    //console.log('digiSum of ', num);
    while (num > 9){
        let rem = num % 10;
        //console.log('rem is: ', rem);
        num = (num - rem) / 10;
        sum+= rem;
    }
    sum+= num;
    return sum;
}