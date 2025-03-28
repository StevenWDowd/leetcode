/**
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function(nums) {
    nums.sort((a,b) => a-b);
    let small = nums[0];
    let big = nums[nums.length - 1];
    if (big % small === 0) return small;
    let bestDiv = 1;
    let div = 1;
    while (div < small){
        if (small % div === 0 && big % div === 0){
            if (div > bestDiv) bestDiv = div;
        }
        div++;
    }
    return bestDiv;


};