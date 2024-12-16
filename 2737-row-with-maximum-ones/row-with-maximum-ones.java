class Solution {
    public int[] rowAndMaximumOnes(int[][] mat) {
        int idx = 0;
        int best = 0;
        for (int i = 0; i < mat.length; i++){
            int[] row = mat[i];
            int ones = 0;
            for(int j = 0; j < row.length; j++){
                if (row[j] == 1){
                    ones = ones + 1;
                }
            }
            if (ones > best){
                best = ones;
                idx = i;
            }
        }

        int[] answer = {idx, best};
        return answer;
    }
}