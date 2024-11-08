/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
    //mapp arr1;
    //for each element of r2, search in map for r1 matches
    //push those and the arr2 element to final arr
    //then, make arr of everything not in arr2, sort, append to finalArr
    const map1 = new Map();
    const map2 = new Map();
    for (let char of arr1){
        if (!map1.has(char)){
            map1.set(char, 1);
        } else {
            map1.set(char, map1.get(char) + 1);
        }
    }

    for (let char of arr2){
        if (!map2.has(char)){
            map2.set(char, 1);
        } else {
            map2.set(char, map2.get(char) + 1);
        }
    }
    const finalArr = [];
    const missArr = [];
    for (let char of arr2){
        if (map1.has(char)){
            let count = map1.get(char);
            while (count > 0){
                finalArr.push(char);
                count--;
            }
        } else {
            //missArr.push(char);
        }
    }
    for (let num of arr1){
        if (!map2.has(num)) missArr.push(num);
    }
    missArr.sort((a,b) => a - b);
    return finalArr.concat(missArr);

};