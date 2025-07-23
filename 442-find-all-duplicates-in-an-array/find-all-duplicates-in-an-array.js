/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    //all positives;
    //for num n, mult nums[n] * - 1 when found
    //then, at end, any positive slots are doubles
    const answer = [];
    for (let i = 0; i < nums.length; i++){
        let current = Math.abs(nums[i]);
        //nums[current - 1] = nums[current - 1] * -1;
        if (nums[current - 1] < 0){
            answer.push(current);
        } else {
            nums[current - 1]*=-1;
        }
        //console.log('nums is now: ', nums);
    }

    // for (let i = 1; i <= nums.length; i++){
    //     if (nums[i - 1] > 0) answer.push(i-1);
    // }
    //console.log('nums is now: ', nums);
    //console.log('nums length is: ', nums.length);
    return answer;
};