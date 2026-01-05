/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let idx1 = 0;
    let idx2 = 0;
    while (idx1 < nums1.length && idx2 < nums2.length){
        let curr1 = nums1[idx1];
        let curr2 = nums2[idx2];
        if (curr1 > curr2){
            //console.log(`curr1 ${curr1} is greater than curr2 ${curr2}. shifting`);
            //keep curr1 for next comparison, but still idx1+1 due to new element
            shiftRight(nums1, idx1);
            nums1[idx1] = curr2;
            idx1++;
            idx2++
        } else {
            //console.log(`curr2 ${curr2} is greater/equal to curr1 ${curr1}`);
            //curr1 is fine where it is, leave m in place
            //compare curr2 with next nums1 element
            //idx2++;
            idx1++;
        }
    }
    while (idx2 < nums2.length){
        //remaining nums2 elements to add
        let target = m + idx2;
        nums1[target] = nums2[idx2];
        idx2++;
        target++;
    }
    
    return;
};
//moves everything in the arr starting with idx one spot to right
//assumes that space exists for this operation
function shiftRight(arr, idx){
    let save = arr[idx];
    while(idx < arr.length - 1){
        let next = arr[idx+1];
        arr[idx+1] = save;
        save = next;
        idx++;
    }
}