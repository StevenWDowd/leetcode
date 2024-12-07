/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isArraySpecial = function(nums) {
    if (nums.length < 2) return true;
    let lastEven;
    if (nums[0] % 2 === 0){
        lastEven = true;
    } else {
        lastEven = false;
    }
    for (let i = 1; i < nums.length; i++){
        let curr = nums[i];
        if (lastEven){
            if (curr % 2 === 0) return false;
        } else {
            if (curr % 2 === 1) return false;
        }
        lastEven = !lastEven;
    }
    
    return true;
};