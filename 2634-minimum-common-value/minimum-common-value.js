/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var getCommon = function(nums1, nums2) {
    const set1 = new Set();
    const set2 = new Set();
    for (let num of nums1){
        set1.add(num);
    }
    for (let num of nums2){
        set2.add(num);
    }
    const uniSet = new Set();
    for (let el of set1){
        if (set2.has(el)) uniSet.add(el);
    }
    for (let el of set2){
        if (set1.has(el)) uniSet.add(el);
    }
    if (uniSet.size === 0) return -1;

    const uniArr = Array.from(uniSet);
    uniArr.sort((a,b) => a-b);
    return uniArr[0];
    
};