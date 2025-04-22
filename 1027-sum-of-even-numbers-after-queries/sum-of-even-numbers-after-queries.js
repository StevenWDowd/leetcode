/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number[]}
 */
var sumEvenAfterQueries = function(nums, queries) {
    const answer = [];
    let evens = 0;
    for (let num of nums){
        if (num % 2 === 0) evens+= num;
    }
    for (let i = 0; i < queries.length; i++){
        let q = queries[i];
        let idx = q[1];
        let toAdd = q[0];
        //simplify
        let oldVal = nums[idx];
        if (nums[idx] % 2 === 0) evens-= oldVal;
        nums[idx] = nums[idx] + toAdd;
        // if (!evens){
        //     evens = 0;
        //     for (let num of nums){
        //         if (num % 2 === 0) evens+= num;
        //     }
        // }
        if (nums[idx] % 2 === 0){
            //new val contributes to evens
            evens+= nums[idx];
            answer.push(evens);
        } else {
            //new val is odd, cut the whole thing
            //evens-= nums[idx];
            //if (evens < 0) evens = 0;
            answer.push(evens);
        }
    }
    return answer;
};