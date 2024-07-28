/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    const intSet = new Set();
    const oneMap = new Map();
    for (let num of nums1){
        oneMap.set(num, num);
    }
    for (let num of nums2){
        if (oneMap.has(num)) intSet.add(num);
    }
    const intersection = [];
    for (let entry of intSet){
        intersection.push(entry);
    }
    return intersection;
};