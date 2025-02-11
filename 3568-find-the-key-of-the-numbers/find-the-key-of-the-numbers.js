/**
 * @param {number} num1
 * @param {number} num2
 * @param {number} num3
 * @return {number}
 */
var generateKey = function(num1, num2, num3) {
    const key = [];
    let str1 = num1.toString();
    let str2 = num2.toString();
    let str3 = num3.toString();
    while (str1.length < 4){
        let leader = '0';
        str1 = leader.concat(str1);
    }
    while (str2.length < 4){
        let leader = '0';
        str2 = leader.concat(str2);
    }
    while (str3.length < 4){
        let leader = '0';
        str3 = leader.concat(str3);
    }
    for (let i = 0; i < 4; i++){
        let dig = Math.min(str1[i], str2[i], str3[i]);
        key.push(dig.toString());
    }
    // console.log("str1: ", str1);
    // console.log("str2: ", str2);
    // console.log("str3: ", str3);
    // console.log('key is: ', key);
    let keyStr = key.join('');
    return Number(keyStr)
    
};