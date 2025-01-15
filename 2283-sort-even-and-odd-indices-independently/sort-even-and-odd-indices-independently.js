/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortEvenOdd = function(nums) {
    const evens = [];
    const odds = [];
    for (let i = 0; i < nums.length; i++){
        if (i % 2 === 0){
            evens.push(nums[i]);
        } else {
            odds.push(nums[i]);
        }
    }
    evens.sort((a,b)=>b-a);
    odds.sort((a,b)=>a-b);
    const finalSort = [];
    while (evens.length && odds.length){
        finalSort.push(evens.pop());
        finalSort.push(odds.pop());
    }
    while (evens.length){
        finalSort.push(evens.pop());
    }
    while (odds.length){
        finalSort.push(odds.pop());
    }
    return finalSort;

};