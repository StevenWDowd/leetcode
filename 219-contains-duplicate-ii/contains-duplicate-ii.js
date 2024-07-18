/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    const idxMap = new Map();
    for (let i = 0; i < nums.length; i++){
        let current = nums[i];
        //console.log('current is ', current);
        if (idxMap.has(current)){
            let oldIdx = idxMap.get(current);
            console.log('oldIdx is: ', oldIdx);
            let difference = oldIdx - i;
            console.log('difference is ', difference);
            if (Math.abs(difference) <= k){
                //console.log('comparing old ',oldIdx , 'to new ', i );
                return true;
            } else {
                idxMap.set(current, i);
                //console.log('new mapping set');
            }
        } else {
            idxMap.set(current, i);
            //console.log('mapping set');
        }
        // if (!idxMap[current]){
        //     //idxMap[current] = [i];

        // } else {
        //     //idxMap[current].push(i)
        // }
    }
    console.log('final map: ', idxMap);
    return false;
    
    
};