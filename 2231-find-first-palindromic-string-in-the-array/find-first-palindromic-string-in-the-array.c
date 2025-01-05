//#include <str.h>

char* firstPalindrome(char** words, int wordsSize) {
    //char answer[] = "";
    for (int i = 0; i < wordsSize; i++){
        char* curr = words[i];
        printf("i is %d\n", i);
        int left = 0;
        size_t right = strlen(curr) - 1;
        bool isPal = true;
        if (left == right) return curr;
        while (isPal && left <= right){
            printf("right index is %d\n", right);
            char lChar = curr[left];
            char rChar = curr[right];
            if (lChar != rChar){
                isPal = false;
            }
            left = left + 1;
            right = right - 1;
        }
        if (isPal){
            return curr;
        }
    }
    return "";
}