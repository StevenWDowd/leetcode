/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var stringHash = function(s, k) {
    let resultArr = [];
    const substrings = [];
    let idx = 0;
    let subArr = [];
    while (idx < s.length){
        //let counter = 0;
        //let subArr = [];
        let current = s[idx];
        //console.log('current is: ', current);
        if (subArr.length < k){
            subArr.push(current);
            //console.log('subArr is: ', subArr);
            //counter++;
            idx++;
        } else {
            //console.log('new substr: ', subArr.join(''));
            substrings.push(subArr.join(''));
            //counter = 0;
            subArr = [];
        }
    }
    if (subArr.length) substrings.push(subArr.join(''));
    //console.log('substrings are: ', substrings);

    for (let substring of substrings){
        let total = 0;
        for (let char of substring){
            let hash = letterDict[char];
            total+= hash;
        }
        let hashedChar = total % 26;
        resultArr.push(letterDict[hashedChar]);
    }
    return resultArr.join('');


};

const letterDict = {
    'a':0,
    'b':1,
    'c':2,
    'd':3,
    'e':4,
    'f':5,
    'g':6,
    'h':7,
    'i':8,
    'j':9,
    'k':10,
    'l':11,
    'm':12,
    'n':13,
    'o':14,
    'p':15,
    'q':16,
    'r':17,
    's':18,
    't':19,
    'u':20,
    'v':21,
    'w':22,
    'x':23,
    'y':24,
    'z':25,
    0:'a',
    1:'b',
    2:'c',
    3:'d',
    4:'e',
    5:'f',
    6:'g',
    7:'h',
    8:'i',
    9:'j',
    10:'k',
    11:'l',
    12:'m',
    13:'n',
    14:'o',
    15:'p',
    16:'q',
    17:'r',
    18:'s',
    19:'t',
    20:'u',
    21:'v',
    22:'w',
    23:'x',
    24:'y',
    25:'z',
}