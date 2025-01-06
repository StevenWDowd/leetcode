int findFinalValue(int* nums, int numsSize, int original) {
    int target = original;
    bool looking = true;
    while (looking){
        for(int i = 0; i < numsSize; i++){
            if (i == numsSize - 1 && nums[i] != target){
                looking = false;
                break;
            }
            if (nums[i] == target){
                target = 2 * target;
                break;
            }
        }
    }
    return target;
}