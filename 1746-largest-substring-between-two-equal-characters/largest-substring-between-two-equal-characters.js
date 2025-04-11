/**
 * @param {string} s
 * @return {number}
 */
var maxLengthBetweenEqualCharacters = function(s) {
    const slotMap = new Map();
    for (let i = 0; i < s.length; i++){
        let char = s[i];
        if (slotMap.has(char)){
            slotMap.get(char).push(i);
        } else {
            slotMap.set(char, [i]);
        }
    }
    const indices = Array.from(slotMap.values());
    for (let arr of indices){
        //more efficient to only save lowest and highest slots, I guess
        arr.sort((a,b) => a-b);
    }

    const filtered = indices.filter((arr) => arr.length > 1);
    if (!filtered.length) return -1;
    let best = 0;
    for (let arr of filtered){
        let distance = arr[arr.length - 1] - arr[0] -1;
        if (distance > best) best = distance;
    }
    return best;
};