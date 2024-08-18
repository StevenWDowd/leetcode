/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    const charMap = new Map();
    for (let char of s){
        if (charMap.has(char)){
            charMap.set(char, charMap.get(char) + 1);
        } else {
            charMap.set(char, 1);
        }
    }
    let total = 0;
    let highOdd = 0;

    for (let [char, count] of charMap){
        if (count % 2 === 0){
            total+= count;
            }
        if (count % 2 !== 0){
            //if new highCount found, add old -1 to total
            //else add count - 1
            if (count > highOdd){
                if (highOdd > 1) total = total + (highOdd - 1);
                highOdd = count;
            } else {
                if (count > 1) total = total + (count - 1);
            }
        }
    }
    console.log('charmap is: ', charMap);
    console.log('highOdd is: ', highOdd);
    console.log('total is: ', total);
    return total + highOdd;
    
};