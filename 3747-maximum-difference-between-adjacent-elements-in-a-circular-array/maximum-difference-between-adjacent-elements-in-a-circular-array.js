/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAdjacentDistance = function(nums) {
    let maxDif = 0;
    let comps = 0;
    let idx = 0;
    while (comps < nums.length){
        let curr = nums[idx];
        let next = nums[nextInd(nums, idx)];
        if (Math.abs(curr - next) > maxDif) maxDif = Math.abs(curr - next);
        comps++;
        idx++;
    }
    return maxDif;

};
function nextInd(arr, idx){
    if (idx < arr.length - 1){
        return idx + 1;
    } else {
        return 0;
    }
}