/**
 * @param {number[]} nums
 * @return {number}
 */
var minIncrementForUnique = function(nums) {
    // const freqMap = new Map();
    // for (let num of nums){
    //     if (freqMap.has(num)){
    //         freqMap.set(num, freqMap.get(num) + 1);
    //     } else {
    //         freqMap.set(num, 1);
    //     }
    // }
    if (nums.length < 2) return 0;
    let opCount = 0;
    const numSet = new Set();
    // for (let i = 0; i < nums.length; i++){
    //     let curr = nums[i];
    //     while (numSet.has(curr)){
    //         curr++;
    //         opCount++;
    //     }
    //     numSet.add(curr);
    // }
    nums.sort((a,b) => a - b);
    numSet.add(nums[0]);
    let nextOpen = nums[0] + 1;
    for (let i = 1; i < nums.length; i++){
        let curr = nums[i];
        if (numSet.has(curr)){
            opCount+= nextOpen - curr;
            numSet.add(nextOpen);
            nextOpen++;

        } else {
            numSet.add(curr);
            nextOpen = curr + 1;
        }
    }
    return opCount;

};