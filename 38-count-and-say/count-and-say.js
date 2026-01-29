/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    if (n === 1) return '1';
    let curr = '1';
    let rev = 1;
    while (rev < n){
        let pairs = mapPairs(curr);
        curr = buildCns(pairs);
        rev++;
    }

    return curr
};

function mapPairs(str){
    let idx = 0;
    let ans = [];
    while (idx < str.length){
        let pair = [];
        let curr = str[idx];
        pair.push(curr);
        let next = str[idx+1];
        let count = 1;
        while (next && next === curr && idx < str.length){
            count++;
            idx++;
            curr = str[idx];
            next = str[idx+1];
        }
        pair.push(count);
        ans.push(pair);
        idx++;
        
    }
    return ans;
}

function buildCns(arr){
    let ans = [];
    for (let pair of arr){
        let count = arr[1];
        ans.push(pair[1].toString());
        ans.push(pair[0]);
    }
    return ans.join('');
}
