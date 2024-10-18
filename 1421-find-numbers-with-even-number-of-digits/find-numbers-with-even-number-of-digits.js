/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
    //10s, 1000s, etc => odd powers of 10
    let evenCount = 0;
    for (let num of nums){
        let roundedLog = Math.floor(Math.log10(num));
        if (roundedLog % 2 === 1) evenCount++;
    }
    return evenCount;
    
};