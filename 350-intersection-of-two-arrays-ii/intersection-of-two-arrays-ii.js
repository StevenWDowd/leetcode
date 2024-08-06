/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    const oneMap = new Map();
    const twoMap = new Map();
    const intersect = [];
    for (let i = 0; i < nums1.length; i++){
        let current = nums1[i];
        if (oneMap.has(current)){
            oneMap.set(current, oneMap.get(current) + 1);
        } else {
            oneMap.set(current, 1);
        }
    }

    for (let i = 0; i < nums2.length; i++){
        let current = nums2[i];
        if (twoMap.has(current)){
            twoMap.set(current, twoMap.get(current) + 1);
        } else {
            twoMap.set(current, 1);
        }
    }

    let oneKeys = Array.from(oneMap.keys());
    //let twoKeys = Array.from(twoMap.keys()); //not needed?
    console.log('oneMap is: ', oneMap);
    console.log('oneKeys is: ', oneKeys);
    for (let key of oneKeys){
        if (twoMap.has(key)){
            let oneCount = oneMap.get(key);
            let twoCount = twoMap.get(key);
            while(oneCount && twoCount){
                intersect.push(key);
                oneCount--;
                twoCount--;
            }
        } //do nothing in other case
    }

    return intersect;

    
};