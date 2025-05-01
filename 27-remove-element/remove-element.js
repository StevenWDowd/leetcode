/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    for (let i = 0; i < nums.length; i++){
        if (nums[i] === val) nums[i] = 'out';
    }
    const stack = [];
    // for (let entry of nums){
    //     stack.push(nums.pop());
    // }
    while (nums.length){
        stack.push(nums.pop());
    }
    while (stack.length){
        let entry = stack.pop();
        if (entry !== 'out') nums.push(entry);
    }
    console.log('nums is now: ', nums);
    return nums.length;
};