/**
 * @param {number[]} nums
 * @return {number[]}
 */
var distinctDifferenceArray = function(nums) {
    const diff = [];
    for (let i = 0; i < nums.length; i++){
        let curr = nums[i];
        const preSet = new Set();
        const postSet = new Set();
        for (let j = i + 1; j < nums.length; j++){
            postSet.add(nums[j]);
        }
        for (let j = i; j > -1; j--){
            preSet.add(nums[j]);
        }
        diff.push(preSet.size - postSet.size);
    }
    return diff;
};