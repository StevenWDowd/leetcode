/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    const freq1 = {};
    const freq2 = {};
    for (let num of nums1){
        freq1[num] = freq1[num] + 1 | 1;
    }
    for (let num of nums2){
        freq2[num] = freq2[num] + 1 | 1;
    }
    const answer1 = [];
    const answer2 = [];

    for (let key in freq1){
        let found = freq2[key];
        if (!found){
            answer1.push(Number(key));
        }
    }

    for (let key in freq2){
        let found = freq1[key];
        if (!found){
            answer2.push(Number(key));
        }
    }

    return [answer1, answer2];
    
};