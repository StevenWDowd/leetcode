/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const indexDict = {};
    for (let i = 0; i < nums.length; i++){
        let num = nums[i];
        indexDict[num] = i;
    }

    for (let i = 0; i < nums.length; i++){
        let num = nums[i];
        let difference = target - num;
        let firstIndex = indexDict[difference];
        if (firstIndex && firstIndex !== i){
            return [firstIndex, i];
        }
    }

    return [0,0];
    
};