/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function(nums) {
    const numMap = new Map();
    for (let num of nums){
        if (numMap.has(num)){
            numMap.set(num, numMap.get(num) + 1);
        } else {
            numMap.set(num, 1);
        }
    }
    const pairs = Array.from(numMap.entries());
    pairs.sort(function(a,b){
        if (a[1] === b[1]){
            return b[0] - a[0];
        } else {
            return a[1] - b[1];
        }

    })
    //console.log('pairs is: ', pairs);
    const final = [];
    for (let pair of pairs){
        let freq = pair[1];
        while (freq > 0){
            final.push(pair[0]);
            freq--;
        }
    }
    return final
};