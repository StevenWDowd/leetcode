/**
 * @param {number[][]} nums1
 * @param {number[][]} nums2
 * @return {number[][]}
 */
var mergeArrays = function(nums1, nums2) {
    const dubArr = [];
    const idMap = new Map();
    for (let pair of nums1){
        if (idMap.has(pair[0])){
            idMap.set(pair[0], idMap.get(pair[0]) + pair[1]);
        } else {
            idMap.set(pair[0], pair[1]);
        }
    }

    for (let pair of nums2){
        if (idMap.has(pair[0])){
            idMap.set(pair[0], idMap.get(pair[0]) + pair[1]);
        } else {
            idMap.set(pair[0], pair[1]);
        }
    }

    for (let [id, val] of idMap){
        dubArr.push([id,val]);
    }

    dubArr.sort((a,b) => a[0] - b[0]);
    return dubArr;
    
};