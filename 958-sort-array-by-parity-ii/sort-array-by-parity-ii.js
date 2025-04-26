/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParityII = function(nums) {
    const odds = [];
    const evens = [];
    for (let num of nums){
        if (num % 2 === 0){
            evens.push(num);
        } else {
            odds.push(num);
        }
    }
    const final = [];
    let idx = 0;
    while (final.length < nums.length){
        if (idx % 2 === 0){
            final.push(evens.pop());
        } else {
            final.push(odds.pop());
        }
        idx++;
    }
    return final
};