/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} multiplier
 * @return {number[]}
 */
var getFinalState = function(nums, k, multiplier) {
    let nums2 = [...nums];
    //console.log('initial nums2: ', nums2);
    //let sortedNums = [...nums].sort((a,b) => b-a);
    while (k > 0){
        let least = Math.min(...nums2);
        let idx = 0;
        let found = false;
        while (idx < nums2.length && !found){
            let current = nums2[idx];
            if (current === least){
                found = true;
            } else {
                idx++;
            }
        }
        nums2[idx] = nums2[idx] * multiplier;
        //console.log('nums2 is', nums2);
        k--;
    }
    return nums2;

    
};