/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @return {number[]}
 */
var twoOutOfThree = function(nums1, nums2, nums3) {
    const answer = [];
    const set1 = new Set();
    const set2 = new Set();
    const set3 = new Set();
    const bigSet = new Set();
    for (let num of nums1){
        set1.add(num);
        bigSet.add(num);
    }
    for (let num of nums2){
        set2.add(num);
        bigSet.add(num);
    }
    for (let num of nums3){
        set3.add(num);
        bigSet.add(num);
    }
    for (let val of bigSet){
        let count = 0;
        if (set1.has(val)) count++;
        if (set2.has(val)) count++;
        if (set3.has(val)) count++;
        if (count >= 2) answer.push(val);
    }
    return answer;
};