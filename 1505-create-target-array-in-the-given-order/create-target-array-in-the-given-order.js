/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
var createTargetArray = function(nums, index) {
    const target = new Array(nums.length);
    //target.fill(undefined);
    for (let i = 0; i < nums.length; i++){
        let num = nums[i];
        let idx = index[i];
        if (target[idx] !== undefined){
            shiftRight(target, idx);
            //console.log('shifted. target is now: ', target);
        }
        target[idx] = num;
    }
    return target;
};

//shifts every element of the array to the right starting w/ idx
function shiftRight(arr, idx){
    let saved = arr[idx];
    arr[idx] = undefined;
    for (let i = idx + 1; i < arr.length; i++){
        let val = saved;
        saved = arr[i];
        arr[i] = val;
    }
};