/**
 * @param {number[]} nums
 * @return {number}
 */
var averageValue = function(nums) {
    const targets = [];
    for (let num of nums){
        if (num % 2 === 0 && num % 3 === 0) targets.push(num);
    }
    let sum = 0;
    if (!targets.length) return sum;
    for (let num of targets){
        sum+= num;
    }
    return Math.floor(sum/targets.length);
    
};