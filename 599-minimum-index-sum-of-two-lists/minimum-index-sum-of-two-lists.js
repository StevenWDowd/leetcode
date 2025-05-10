/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function(list1, list2) {
    //map words to indices
    //find union map
    //sort by lowest overall sum of indices
    const map1 = new Map();
    const map2 = new Map();
    const unionMap = new Map();
    for (let i = 0; i < list1.length; i++){
        let word = list1[i];
        map1.set(word, i);
    }
    for (let i = 0; i < list2.length; i++){
        let word = list2[i];
        map2.set(word, i);
    }
    for (let [word, idx] of map1){
        if (map2.has(word)){
            unionMap.set(word, idx + map2.get(word));
        }
    }
    let entries = Array.from(unionMap.entries());
    if (!entries.length) return entries;
    entries.sort((a,b) => a[1] - b[1]);
    let min = entries[0][1];
    let final = [];
    let curr = min;
    for (let pair of entries){
        let word = pair[0];
        let sum = pair[1];
        if (sum === min){
            final.push(word);
        } else {
            break;
        }
    }
    return final
};