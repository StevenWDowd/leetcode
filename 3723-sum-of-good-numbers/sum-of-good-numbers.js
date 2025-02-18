/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var sumOfGoodNumbers = function(nums, k) {
    let goodSum = 0;
    for (let i = 0; i < nums.length; i++){
        let curr = nums[i];
        let good = true;
        if ((i-k) > -1){
            if (curr <= nums[i - k]) good = false;
        }
        if ((i + k) < nums.length){
            if (curr <= nums[i + k]) good = false;
        }
        if (good) goodSum+= curr;
    }
    return goodSum
};