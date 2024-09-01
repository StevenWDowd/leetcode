/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function(nums) {
    const topValues = [];
    let highScore = 0;
    const numMap = new Map();
    for (let num of nums){
        if (numMap.has(num)){
            numMap.set(num, numMap.get(num) + 1);
        } else {
            numMap.set(num, 1);
        }
        if (numMap.get(num) > highScore) highScore = numMap.get(num);
    }

    //now, find each num with the greatest degree
    for (let [num, count] of numMap){
        if (count === highScore) topValues.push(num);
    }

    //highScore is degree. start counting at first value, stop counting when
    //last value is reached. do for each candidate num, then return shortest result
    let shortLength;
    for (let candidate of topValues){
        let count = highScore;
        let foundVal = false; //add one at end?
        let idx = 0;
        let subLen = 0;
        while (count > 0){
            let current = nums[idx];
            if (current === candidate){
                count--;
                foundVal = true;
            }
            if (foundVal) subLen++; 
            idx++;
        }
        if (!shortLength) shortLength = subLen;
        if (subLen < shortLength) shortLength = subLen;
    }
    return shortLength;
};