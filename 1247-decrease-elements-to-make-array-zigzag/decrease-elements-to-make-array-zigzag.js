/**
 * @param {number[]} nums
 * @return {number}
 */
var movesToMakeZigzag = function(nums) {
    const evens = [...nums];
    const odds = [...nums];
    let evenCount = 0;
    let oddCount = 0;
    for (let i = 0; i < evens.length; i = i + 2){
        //let curr = evens[i];
        while (evens[i] >= evens[i - 1] || evens[i] >= evens[i+1]){
            evens[i] = evens[i] - 1;
            evenCount++;
        }
    }

    for (let i = 1; i < odds.length; i = i + 2){
        //let curr = evens[i];
        while (odds[i] >= odds[i - 1] || odds[i] >= odds[i + 1]){
            odds[i] = odds[i] - 1;
            oddCount++;
        }
    }

    return (evenCount < oddCount) ? evenCount : oddCount;
};