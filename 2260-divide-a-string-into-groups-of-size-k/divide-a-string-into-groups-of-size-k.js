/**
 * @param {string} s
 * @param {number} k
 * @param {character} fill
 * @return {string[]}
 */
var divideString = function(s, k, fill) {
    let idx = 0;
    let groups = [];
    while (groups.length < Math.ceil(s.length / k)){
        let count = k;
        let group = [];
        while (count > 0){
            //let group = [];
            let curr = s[idx];
            if (!curr) curr = fill;
            group.push(curr);
            count--;
            idx++;
        }
        groups.push(group);
    }
    return groups.map((arr)=> arr.join(''));
};