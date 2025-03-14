/**
 * @param {number[]} tickets
 * @param {number} k
 * @return {number}
 */
var timeRequiredToBuy = function(tickets, k) {
    //person at index k
    //decrement everyone until index k is at 1
    //then decrement only remaining members ahead of them
    let time = 0;
    while (tickets[k] > 1){
        for (let i = 0; i < tickets.length; i++){
            if (tickets[i] > 0) {
                tickets[i] = tickets[i] - 1;
                time++;
            }
        }
    }
    //now add 1 for remaining nonzeroes up to k
    for (let i = 0; i <= k; i++){
        if (tickets[i] > 0) time++;
    }
    return time;
};