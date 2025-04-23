/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
    const final = [];
    const odds = [];
    for (let num of nums){
        if (num % 2 === 0){
            final.push(num);
        } else {
            odds.push(num);
        }
    }
    for (let num of odds){
        final.push(num);
    }
    return final;
};