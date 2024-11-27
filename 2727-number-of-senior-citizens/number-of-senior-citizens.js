/**
 * @param {string[]} details
 * @return {number}
 */
var countSeniors = function(details) {
    let over60 = 0;
    for (let str of details){
        let ageInfo = Number(str.slice(11,13));
        if (ageInfo > 60) over60++;
    }
    return over60;
};