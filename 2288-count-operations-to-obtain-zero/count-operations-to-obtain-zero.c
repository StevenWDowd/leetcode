int countOperations(int num1, int num2) {
    int opCount = 0;
    int first = num1;
    int second = num2;
    while (first > 0 && second > 0){
        if (first >= second){
            first = first - second;
            opCount++;
        } else {
            second = second - first;
            opCount++;
        }
    }
    return opCount;
}