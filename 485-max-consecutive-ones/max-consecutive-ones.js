/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let highScore = 0;
    let idx = 0;
    let counter = 0;
    while (idx < nums.length){
        if (nums[idx] === 1){
            counter++;
        } else {
            if (counter > highScore) highScore = counter;
            counter = 0;
        }
        idx++;
    }
    //to catch a high sequence at end of array. more elegant way?
    if (counter > highScore) highScore = counter;
    return highScore;
};