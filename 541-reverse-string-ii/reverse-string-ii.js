/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
    if (s.length < 2) return s;
    let chars = s.split('');
    let ans = [];
    let idx = 0;
    let counter = 2*k;
    let holding = [];
    while (idx < chars.length){
        let curr = chars[idx];
        counter--;
        //in 'first half'
        if(counter >= k){
            holding.push(curr);
        } else {
            ans.push(curr);
        }
        //now dump buffered chars into ans
        if (holding.length === k){
            while(holding.length){
                ans.push(holding.pop());
            }
        }

        idx++;
        if (counter < 1) counter = 2*k;

    }
    //console.log('buffer is now: ', holding);
    while (holding.length){
        ans.push(holding.pop());
    }
    return ans.join('');
};