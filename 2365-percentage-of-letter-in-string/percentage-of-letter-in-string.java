class Solution {
    public int percentageLetter(String s, char letter) {
        double count = 0;
        double sLen = s.length();
        for (int i = 0; i < s.length(); i++){
            char curr = s.charAt(i);
            if (curr == letter){
                count = count + 1;
            }
        }
        System.out.println(count);
        System.out.println(sLen);
        return (int) Math.floor((count/sLen) * 100.0);
    }
}