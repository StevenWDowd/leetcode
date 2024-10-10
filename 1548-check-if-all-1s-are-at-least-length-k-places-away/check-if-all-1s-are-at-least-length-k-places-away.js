/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var kLengthApart = function(nums, k) {
    let idx = 0;
    let foundOne = false;
    //let result = true;
    //find the first 1
    while (!foundOne && idx < nums.length){
        let current = nums[idx];
        if (current === 1) foundOne = true;
        idx++;
    }
    let countdown = k;
    while (idx < nums.length){
        current = nums[idx];
        if (current === 0) countdown--;
        if (current === 1 && countdown > 0) return false;
        if (current === 1 && countdown <= 0) countdown = k;
        idx++;
    }
    return true;
};