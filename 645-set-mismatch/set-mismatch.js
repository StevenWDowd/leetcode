/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
    const numMap = new Map();
    const ansArr = [];
    let doubled;
    let missing;
    for (let num of nums){
        if(numMap.has(num)){
            numMap.set(num, numMap.get(num) + 1);
        } else {
            numMap.set(num, 1);
        }
    }
    for (let i = 1; i <= nums.length; i++){
        //let current = nums[i];
        //if (!numMap.has(current) && !missing) missing = i;
        //if (numMap.get(current) > 1) doubled = current;
        if (!numMap.has(i)) missing = i;
        if (numMap.get(i) > 1) doubled = i;
    }
    return [doubled, missing];
};