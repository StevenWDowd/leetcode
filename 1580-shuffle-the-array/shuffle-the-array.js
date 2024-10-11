/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    const shufArr = [];
    let x = 0;
    let y = n;
    while(y < nums.length){
        shufArr.push(nums[x]);
        shufArr.push(nums[y]);
        x++;
        y++;
    }
    return shufArr;
};