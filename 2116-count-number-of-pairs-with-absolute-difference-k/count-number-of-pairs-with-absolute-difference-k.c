#include <stdlib.h>

int countKDifference(int* nums, int numsSize, int k) {
    int pairCount = 0;
    for (int i = 0; i < numsSize; i++){
        int curr = nums[i];
        for(int j = i + 1; j < numsSize; j++){
            int next = nums[j];
            int diff = abs(curr - next);
            if (diff == k){
                pairCount = pairCount + 1;
            }
        }
    }
    return pairCount;

}