/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    //n length => n! perms
    function exchange(arr, idx1, idx2){
        let save = arr[idx1];
        arr[idx1] = arr[idx2];
        arr[idx2] = save;
    }
    function getPerms(perms, arr, idx){
        if (idx === arr.length){
            perms.push([...arr]);
            return;
        }
        for (let i = idx; i < arr.length; i++){
            exchange(arr, idx, i);
            getPerms(perms, arr, idx + 1);
            exchange(arr, idx, i);
        }
    }
    const final = [];
    getPerms(final, nums, 0);
    return final;
};