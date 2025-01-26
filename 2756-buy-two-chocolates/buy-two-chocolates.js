/**
 * @param {number[]} prices
 * @param {number} money
 * @return {number}
 */
var buyChoco = function(prices, money) {
    let cashleft = money;
    prices.sort((a,b) => a-b);
    cashleft-=(prices[0] + prices[1]);
    if (cashleft >= 0) return cashleft;
    return money;
};