/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let left = 0;
    let right = k-1;
    let currMax;
    let bestLeft = left;
    let bestRight = right;
    let total = 0;
    for (let i = 0; i < k; i++){
        total+=nums[i];
    }
    currMax = total/k;
    while (right < nums.length - 1){
        total = total - nums[left];
        left++;
        right++;
        total = total + nums[right];
        if (total/k > currMax){
            currMax = total/k;
            //console.log('newmax found, land r are:', left, right);
            bestLeft = left;
            bestRight = right;
        }
    }
    return currMax;
    
};