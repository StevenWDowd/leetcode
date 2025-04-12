/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
var numSubarraysWithSum = function(nums, goal) {
    let hits = 0;
    //const prefixes = [];
    const prefMap = new Map();
    let currSum = nums[0];
    prefMap.set(currSum, 1);
    if (currSum === goal) hits++;
    //prefixes.push(nums[0]);
    for (let i = 1; i < nums.length; i++){
        currSum+= nums[i];
        if (currSum === goal) hits++;
        //prefixes.push(currSum);
        let diff = currSum - goal;
        if (prefMap.has(diff)){
            hits+=prefMap.get(diff);
        }
        if (prefMap.has(currSum)){
            prefMap.set(currSum, prefMap.get(currSum) + 1);
        } else {
            prefMap.set(currSum, 1);
        }
    }
    //hash map storing val of num with key of (goal - num)?
    //then count how many of the corresponding val there are?
    // const prefMap = new Map();
    // const prefSet = new Set();
    // for (let num of prefixes){
    //     prefSet.add(num);
    //     if (prefMap.has(num)){
    //         prefMap.set(num, prefMap.get(num) + 1);
    //     }else {
    //         prefMap.set(num, 1);
    //     }
    // }
    // console.log('prefixes is: ', prefixes);
    // // for (let num of prefixes){
    // //     let diff = goal - num;
    // //     if (prefMap.has(diff)) hits+= prefMap.get(diff);
    // // }
    // for (let item of prefSet){
    //     let diff = goal - item;
    //     //console.log('diff is ', diff);
    //     if (prefMap.has(diff)) hits+= prefMap.get(diff);
    // }
    return hits;
    
};