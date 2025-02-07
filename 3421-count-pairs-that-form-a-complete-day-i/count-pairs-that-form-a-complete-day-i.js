/**
 * @param {number[]} hours
 * @return {number}
 */
var countCompleteDayPairs = function(hours) {
    let count = 0;
    for (let i = 0; i < hours.length; i++){
        let first = hours[i];
        for (let j = i + 1; j < hours.length; j++){
            let second = hours[j];
            if ((first + second) % 24 === 0) count++;
        }
    }
    return count;
};