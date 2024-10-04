/**
 * @param {string} s
 * @return {number}
 */
var maxPower = function(s) {
    let highScore = 1;
    let idx = 1;
    let current = s[0];
    let score = 1;
    while (idx < s.length){
        let next = s[idx];
        if (current === next){
            score++;
            if (score > highScore) highScore = score;
        } else {
            //check highSore again?
            score = 1;
        }
        current = s[idx];
        idx++;
    }

    return highScore;
};