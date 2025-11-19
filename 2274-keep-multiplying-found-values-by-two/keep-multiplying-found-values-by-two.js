/**
 * @param {number[]} nums
 * @param {number} original
 * @return {number}
 */
var findFinalValue = function(nums, original) {
    let numSet = new Set(nums);
    let present = numSet.has(original);
    while (present){
        original*=2;
        present = numSet.has(original);
    }
    return original;
};