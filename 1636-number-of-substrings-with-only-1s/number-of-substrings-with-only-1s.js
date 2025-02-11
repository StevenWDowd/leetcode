/**
 * @param {string} s
 * @return {number}
 */
var numSub = function(s) {
    let total = 0;
    let idx = 0;
    //const counts = [];
    while (idx < s.length){
        let curr = s[idx];
        if (curr === '1'){
            let dex2 = idx+1;
            let bound = s[dex2];
            while(bound === '1'){
                dex2++;
                bound = s[dex2];
            }
            //1s stretch from idx to dex2 -1
            let n = dex2 - idx;
            total+= (n + 1) * n / 2;
            //set idx to end of this area
            idx = dex2;
        } else {
            idx++;
        }
    }

    return total % (10**9 + 7)
};