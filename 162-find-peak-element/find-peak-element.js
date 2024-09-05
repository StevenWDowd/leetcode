/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    if (nums.length < 2) return 0;
    let left = 0;
    let right = nums.length - 1;
    
    while (left <= right){
        let mid = Math.floor((left + right)/2);
        console.log('mid is: ', mid);
        console.log('leftel: ', nums[mid-1]);
        console.log('rightel: ', nums[mid+1]);
        if (nums[mid-1] < nums[mid] && nums[mid+1] < nums[mid]) return mid;
        if (!nums[mid-1] && nums[mid+1] < nums[mid]) return mid;
        if (!nums[mid+1] && nums[mid-1] < nums[mid]) return mid;
        if (nums[mid+1] > nums[mid]){
            //take right side
            left = mid + 1;
        } else {
            right = mid;
        }
    }
    return -1;
};