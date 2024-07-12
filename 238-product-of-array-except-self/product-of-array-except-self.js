/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const prefixes = []; //first element is 1
    prefixes.push(1);
    const suffixes = new Array(nums.length); //last element is 1
    suffixes[nums.length - 1] = 1;
    for (let i = 1; i < nums.length; i++){
        let prev = prefixes[i-1];
        let current = nums[i-1];
        prefixes.push(current * prev);
        // if (prev){
        //     prefixes.push(prev * current);
        // } else {
        //     prefixes.push(current);
        // }

    }

    for (let i = nums.length - 2; i >= 0; i--){
        let prev = suffixes[i+1];
        let current = nums[i+1];
        suffixes[i] = current * prev;
        // if (prev){
        //     suffixes[i] = current * prev;
        // } else {
        //     suffixes[i] = prev;
        // }
        
    }
    // console.log('prefixes: ', prefixes);
    // console.log('suffixes: ', suffixes);

    const finalArr = new Array(nums.length);
    for (let i = 0; i < nums.length; i++){
        finalArr[i] = prefixes[i] * suffixes[i];
    }

    return finalArr;
};