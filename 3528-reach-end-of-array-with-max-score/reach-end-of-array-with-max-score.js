/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaximumScore = function(nums) {
    //jump to nearest greater number?
    //if none, jump to end
    let score = 0;
    let idx = 0;
    while (idx < nums.length){
        if (idx === nums.length - 1){
            idx++;
        } else {
        let current = nums[idx];
        let pointer = idx;
        let candidate = nums[pointer]
        while (candidate <= current && pointer < nums.length){
            pointer++;
            candidate = nums[pointer];
            //console.log('current is: ', current);
            //console.log('candidate is: ', candidate);
        }
        if (pointer >= nums.length) pointer = nums.length - 1;
        score+= (pointer - idx) * current;
        //console.log('score is now: ', score);
        idx = pointer;
        //if (idx === nums.length - 1) idx++;
        }
    }
    return score;
};