/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function(arr) {
    let arrCopy = [...arr];
    const sortedArr = arrCopy.sort((a,b) => a-b);
    const sortedSet = new Set(sortedArr);
    console.log(sortedArr);
    const cutArr = Array.from(sortedSet);
    const rankMap = new Map();
    for (let i = 0; i < cutArr.length; i++){
        let current = cutArr[i];
        rankMap.set(current, i + 1);
    }
    const finalArr = [];
    for (let num of arr){
        let rank = rankMap.get(num);
        finalArr.push(rank);
    }
    return finalArr;


};