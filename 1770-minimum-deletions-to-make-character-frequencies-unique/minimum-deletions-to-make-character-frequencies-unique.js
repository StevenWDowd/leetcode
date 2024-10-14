/**
 * @param {string} s
 * @return {number}
 */
var minDeletions = function(s) {
    //freq of 0 is ignored
    const freqMap = new Map();
    for (let char of s){
        if (freqMap.has(char)){
            freqMap.set(char, freqMap.get(char)+1);
        } else {
            freqMap.set(char, 1);
        }
    }

    let delCount = 0;
    const freqs = [];
    const freqSet = new Set;
    //sort freqs, try to add to Set?
    //add largest first to minimize deletions? not sure that works
    for (let [key, freq] of freqMap){
        freqs.push(freq);
    }
    const sortedFreqs = freqs.sort((a,b) => b-a);
    for (let i = 0; i < sortedFreqs.length; i++){
        let current = sortedFreqs[i];
        while (current > 0){
            if (!freqSet.has(current)){
                freqSet.add(current);
                //exit loop
                current = 0;
            } else {
                current--;
                delCount++;
            }
        }
    }
    return delCount;
};