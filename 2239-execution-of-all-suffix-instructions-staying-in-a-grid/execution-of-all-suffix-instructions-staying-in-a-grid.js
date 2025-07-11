/**
 * @param {number} n
 * @param {number[]} startPos
 * @param {string} s
 * @return {number[]}
 */
var executeInstructions = function(n, startPos, s) {
    //must remain under n, above 0
    const answer = [];
    for (let i = 0; i < s.length; i++){
        let count = traverse(i);
        answer.push(count);

    }
    function traverse(idx){
        let count = 0;
        let dupStart = [...startPos];
        for (let i = idx; i < s.length; i++){
            let inst = s[i];
            if (inst === 'L') dupStart[1]--;
            if (inst === 'R') dupStart[1]++;
            if (inst === 'U') dupStart[0]--;
            if (inst === 'D') dupStart[0]++;
            if (dupStart[0] < 0 || dupStart[0] > n - 1  || dupStart[1] < 0 || dupStart[1] > n - 1){
                break;
            }

            count++;
        }
        return count;
    }

    return answer;


};