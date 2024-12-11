/**
 * @param {number} purchaseAmount
 * @return {number}
 */
var accountBalanceAfterPurchase = function(purchaseAmount) {
    let minus = purchaseAmount;
    if (minus % 10 !== 0){
        minus = 10 * Math.round(minus/10);
    }

    return 100 - minus;
};