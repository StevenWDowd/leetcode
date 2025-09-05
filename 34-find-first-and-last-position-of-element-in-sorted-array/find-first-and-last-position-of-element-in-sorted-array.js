/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    //binary search, then binary search each half for start and end position
    let foundIdx = biSearch(nums, target, 0, nums.length - 1);
    if (foundIdx < 0){
        return [-1, -1];
    }
    console.log('foundidx is: ', foundIdx);
    //bisearch left half
    let upper = biSearch(nums, target, 0, foundIdx - 1);
    console.log('first upper is: ', upper);
    let finalLeft = foundIdx;
    //bisearch right half
    let lower = biSearch(nums, target, foundIdx + 1, nums.length -1);
    console.log('first lower is: ', lower);
    let finalRight = foundIdx;
    while (upper > -1){
        finalLeft = upper;
        upper = biSearch(nums, target, 0, upper - 1);
    }

    while (lower > -1){
        finalRight = lower;
        lower = biSearch(nums, target, lower + 1, nums.length - 1);
    }
    //have to bisearch halves until result is -1?
    return [finalLeft, finalRight];
    // console.log("foundIdx is: ", foundIdx);
    // console.log("upper is: ", upper);
    // console.log("lower is: ", lower);
    // if (upper > -1 && lower > -1) return [upper, lower];
    // if (upper > -1) return [upper, foundIdx];
    // if (lower > -1) return [foundIdx, lower];
    // return [foundIdx, foundIdx];
    //return [foundIdx];

    
};

//returns index of a target number in a sorted array
//returns -1 if target not found
function biSearch(arr, target, left, right){
    //special cases
    if (!arr.length) return -1;
    if (left === right){
        if (arr[left] === target) return left;
        return -1;
    }
    //let left = 0;
    //let right = arr.length - 1;
    while (left < right){
        let mid = Math.floor((left + right) / 2);
        //console.log("left is: ", left);
        //console.log("right is: ", right);
        //console.log('mid idx is: ', mid);
        if (arr[mid] === target){
            return mid;
        }
        if (arr[left] === target) return left;
        if (arr[right] === target) return right;
        if (arr[mid] > target){
            right = mid - 1;
        }
        if (arr[mid] < target){
            left = mid + 1;
        }
    }
    return -1;

}