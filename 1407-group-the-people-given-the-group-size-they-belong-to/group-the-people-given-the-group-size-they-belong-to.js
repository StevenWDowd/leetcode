/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
var groupThePeople = function(groupSizes) {
    const groups = [];
    //map of size:memberId pairs
    const groupMap = new Map();
    for (let i = 0; i < groupSizes.length; i++){
        let size = groupSizes[i];
        if (groupMap.has(size)){
            groupMap.get(size).push(i);
        } else {
            let arr = [];
            groupMap.set(size, arr);
            groupMap.get(size).push(i);
        }
    }
    for (let [size, mems] of groupMap){
        if (mems.length < size + 1){
            groups.push(mems);
        } else {
            while (mems.length){
                let sub = [];
                while (sub.length < size){
                    let mem = mems.pop();
                    sub.push(mem);
                }
                groups.push(sub);
            }
        }
    }
    return groups;
};