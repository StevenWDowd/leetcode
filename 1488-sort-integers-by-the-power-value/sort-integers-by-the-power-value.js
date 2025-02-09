/**
 * @param {number} lo
 * @param {number} hi
 * @param {number} k
 * @return {number}
 */
var getKth = function(lo, hi, k) {
    let idx = lo;
    //list of [num, power] pairs
    const powList = [];
    while (idx <= hi){
        let powPair;
        if (!powerMap.has(idx)){
            let pow = getPower(idx);
            powerMap.set(idx, pow);
            powPair = [idx, pow];
        } else {
            powPair = [idx, powerMap.get(idx)];
        }
        powList.push(powPair);
        idx++;
    }
    //sort list
    powList.sort((a,b) => {
        //sort by power
        if (a[1] > b[1]) return 1;
        if (a[1] < b[1]) return -1;

        //sort by num
        if (a[0] > b[0]) return 1;
        if (a[0] < b[0]) return 1;
    });

    //console.log('powList is: ', powList);
    return powList[k - 1][0];

};

function getPower(num){
    let opCount = 0;
    while (num !== 1){
        if (num % 2 === 0){
            num = num / 2;
        } else {
            num = 3 * num + 1;
        }
        opCount++;
    }
    return opCount;
}

//map of [num, power] pairs
const powerMap = new Map();