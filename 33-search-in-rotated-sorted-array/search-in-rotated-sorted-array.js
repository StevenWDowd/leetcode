/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    //1 or fewer elements
    if (!nums.length) return -1;
    if (nums.length === 1){
        if (nums[0] === target) return 0;
        return -1;
    }
    let left = 0;
    let right = nums.length - 1;
    //if right < mid, mid is before pivot point
    //if left > mid, mid is before pivot point
    while (left < right){
        let start = nums[left];
        let end = nums[right];
        let mid = Math.floor((left + right)/2);
        let cent = nums[mid];
        if (start === target) return left;
        if (end === target) return right;
        if (cent === target) return mid;
        if (cent > target){
            //need to check if start > end (are we still considering pivot)
            if (cent > end && start > end && start > target){
                left = mid + 1;
            } else {
                right = mid;
            }
        }
        if (cent < target){
            if (cent < start && start > end && end < target){
                right = mid;
            } else {
                left = mid + 1;
            }
        }
    }
    return -1;
    
};