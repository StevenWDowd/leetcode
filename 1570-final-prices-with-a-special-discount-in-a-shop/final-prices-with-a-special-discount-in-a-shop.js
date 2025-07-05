/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function(prices) {
    let answer = [];
    for (let i = 0; i < prices.length; i++){
        let discount = 0;
        let price = prices[i];
        for (let j = i + 1; j < prices.length; j++){
            let next = prices[j];
            if (next < price + 1){
                discount = next;
                break;
            }
        }
        answer.push(price-discount);
    }
    return answer;
};