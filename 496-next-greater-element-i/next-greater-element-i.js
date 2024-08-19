/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    const map1 = new Map();
    const map2 = new Map();
    const ans = [];
    for (let i = 0; i < nums1.length; i++){
        map1.set(i, nums1[i]);
    }
    for (let i = 0; i < nums2.length; i++){
        map2.set(nums2[i], i);
    }
    for (let i = 0; i < nums1.length; i++){
        let current1 = nums1[i];
        let spot = map2.get(current1);
        let nextGreat;
        while (!nextGreat && spot < nums2.length){
            if (nums2[spot] > current1) nextGreat = nums2[spot];
            spot++;
        }
        if (nextGreat){
            ans.push(nextGreat)
        } else {
            ans.push(-1);
        }
    }
    return ans;
};