/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function(s, goal) {
    let splitS = s.split('');
    let goalSplit = goal.split('');
    let spins = 0;
    const goalMap = new Map();
    for (let i = 0; i< goal.length; i++){
        goalMap.set(i, goal[i]);
    }
    while (spins < s.length){
        for (let i = 0; i< s.length; i++){
            if (compArr(splitS, goalMap)) return true;
        }
        spins++;
        rotate(splitS);
    }
    return false;
};

function rotate(arr){
    // let first = arr[0];
    // let last = arr[arr.length - 1];
    // arr[0] = last;
    // arr[arr.length - 1] = first;
    let first = arr.shift();
    arr.push(first);
}

function compArr(arr, map){
    for (let i = 0; i < arr.length; i++){
        if (arr[i] !== map.get(i)) return false;
    }
    return true;
}