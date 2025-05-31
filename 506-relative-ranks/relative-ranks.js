/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function(score) {
    const answer = [];
    const pairs = [];
    //[score, index]
    for (let i = 0; i < score.length; i++){
        pairs.push([score[i], i]);
    }
    pairs.sort((a,b) => b[0] - a[0]);
    for (let i = 0; i < pairs.length; i++){
        let curr = pairs[i];
        if (i === 0){ 
            curr[0] = 'Gold Medal';
        } else if (i === 1) {
            curr[0] = 'Silver Medal';
        } else if (i === 2){
            curr[0] = 'Bronze Medal';
        } else {
            curr[0] = `${i + 1}`;
        }
    }
    pairs.sort((a,b) => a[1] - b[1]);
    for (let pair of pairs){
        answer.push(pair[0]);
    }
    return answer;

};