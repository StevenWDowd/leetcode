/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} threshold
 * @return {number}
 */
var numOfSubarrays = function(arr, k, threshold) {
    let left = 0
    let right = k-1;
    let sum = 0;
    let qualSubs = 0;
    for (let i = 0; i <= right; i++){
        sum+= arr[i];
    }
    if (sum/k >= threshold) qualSubs++;
    while(right < arr.length - 1){
        sum-= arr[left];
        left++;
        right++;
        sum+= arr[right];
        if (sum/k >= threshold) qualSubs++;
    }
    return qualSubs;
};