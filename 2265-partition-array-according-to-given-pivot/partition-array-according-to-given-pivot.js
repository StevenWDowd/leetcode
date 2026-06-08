/**
 * @param {number[]} nums
 * @param {number} pivot
 * @return {number[]}
 */
var pivotArray = function(nums, pivot) {
    let pivCount = 0;
    const lessers = [];
    const greaters = [];
    for (let num of nums){
        if (num === pivot) pivCount++;
        if (num < pivot) lessers.push(num);
        if (num > pivot) greaters.push(num);
    }
    const final = [...lessers];
    while (pivCount > 0){
        final.push(pivot);
        pivCount--;
    }
    for (let num of greaters){
        final.push(num);
    }
    return final;

};