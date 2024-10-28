/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var addedInteger = function(nums1, nums2) {
    let sum1 = nums1.reduce((acc, current) => acc + current, 0);
    let sum2 = nums2.reduce((acc, current) => acc+ current, 0);
    return (sum2 - sum1)/nums1.length;
};