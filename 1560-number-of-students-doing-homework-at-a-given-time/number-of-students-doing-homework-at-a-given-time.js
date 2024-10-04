/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number} queryTime
 * @return {number}
 */
var busyStudent = function(startTime, endTime, queryTime) {
    let numberWorking = 0;
    for (let i = 0; i < startTime.length; i++){
        let start = startTime[i];
        let end = endTime[i];
        if (queryTime >= start && queryTime <= end) numberWorking++;
    }
    return numberWorking;
};