/**
 * @param {number[][]} items1
 * @param {number[][]} items2
 * @return {number[][]}
 */
var mergeSimilarItems = function(items1, items2) {
    const valMap = new Map();
    for (let item of items1){
        if (!valMap.has(item[0])){
            valMap.set(item[0], item[1]);
        } else {
            valMap.set(item[0], valMap.get(item[0]) + item[1]);
        }
    }

    for (let item of items2){
        if (!valMap.has(item[0])){
            valMap.set(item[0], item[1]);
        } else {
            valMap.set(item[0], valMap.get(item[0]) + item[1]);
        }
    }

    const items = [];
    for (let [key, val] of valMap){
        items.push([key, val]);
    }

    items.sort((a,b) => a[0] - b[0]);

    return items;
};