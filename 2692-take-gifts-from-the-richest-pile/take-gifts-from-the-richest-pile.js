/**
 * @param {number[]} gifts
 * @param {number} k
 * @return {number}
 */
var pickGifts = function(gifts, k) {
    let giftSum = gifts.reduce((acc, curr) => acc + curr, 0);
    while (k > 0){
        let targetIdx = maxIndex(gifts);
        let rem = Math.floor(Math.sqrt(gifts[targetIdx]));
        giftSum-= gifts[targetIdx] - rem;
        gifts[targetIdx] = rem;
        k--;
    }
    return giftSum;
    
};

function maxIndex(arr){
    let max = 0;
    let idx = 0;
    for (let i = 0; i < arr.length; i++){
        if (arr[i] > max){
            max = arr[i];
            idx = i;
        }
    }
    return idx;
}