/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    if (nums.length < 2) return nums;

    let mid = Math.floor(nums.length / 2)
    let first = nums.slice(0, mid);
    let second = nums.slice(mid);
    return mergeArr(sortArray(first), sortArray(second));
};

function mergeArr(a1, a2){
    let idx1 = 0;
    let idx2 = 0;
    const merged = [];
    while (idx1 < a1.length && idx2 < a2.length){
        let one = a1[idx1];
        let two = a2[idx2];
        if (one <= two){
            merged.push(one);
            idx1++;
        } else {
            merged.push(two);
            idx2++;
        }
    }
    while (idx1 < a1.length){
        merged.push(a1[idx1]);
        idx1++;
    }
    while (idx2 < a2.length){
        merged.push(a2[idx2]);
        idx2++;
    }
    return merged;
}