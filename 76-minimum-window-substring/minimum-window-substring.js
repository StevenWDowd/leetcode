/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    
    let windowSize = t.length;
    let windowLeft = 0;
    let windowRight = 0;
    //let windowRight = windowSize - 1;
    let matchFound = false;
    const coords = [];

    //easy check
    if (t.length > s.length){
        return '';
    }

    //frequency counter for string t
    const tCounter = {};
    for (let char of t){
        tCounter[char] = (tCounter[char] + 1) || 1;
    }

    //freq counter for initial window
    const windowCounter = {};
    for (let i = windowLeft; i <= windowRight; i++){
        windowCounter[s[i]] = (windowCounter[s[i]] + 1) || 1;
    }

    if (compareCounters(tCounter, windowCounter)){
        matchFound = true;
    }

    while (windowRight < s.length){
        //moving the window's right side
        if (!matchFound){
            windowRight++;
            windowCounter[s[windowRight]] = (windowCounter[s[windowRight]] + 1) || 1;
            if (compareCounters(tCounter, windowCounter)){
                matchFound = true;
            }
        }

        //moving the window's left side
        if (matchFound){
            //remove leftmost letter from windowCounter
            windowCounter[s[windowLeft]] = windowCounter[s[windowLeft]] - 1;
            //increment left pointer
            windowLeft++;
            if (!compareCounters(tCounter, windowCounter)){
                matchFound = false;
                coords.push([windowLeft - 1, windowRight]);
            }
        }
    }

    //if no matches were found, return empty string
    if (coords.length === 0){
        return '';
    }

    const closestInidices = coords.reduce((acc, pair) => (pair[1] - pair[0]) < (acc[1] - acc[0]) ? pair : acc);

    return s.substring(closestInidices[0], closestInidices[1] + 1);

    // while (!minFound){
    //     while(!maxFound && windowRight < s.length){
    //         if (compareCounters(tCounter, windowCounter)){
    //             maxFound = true;
    //         } else {
    //             windowRight++;
    //             windowCounter[s[windowRight]] = windowCounter[s[windowRight]] + 1 || 1;
    //         }
    //     }
    //     if (!maxFound){
    //         return '';
    //     }

    //     if (!compareCounters(tCounter, windowCounter)){
    //         minFound = true;
    //     } else {
    //         windowCounter[s[windowLeft]] = windowCounter[s[windowLeft]] - 1;
    //         windowLeft++;
    //     }
    // }

    // return s.substring(windowLeft - 1, windowRight + 1);




    // while (windowSize <= s.length){
    //     //create initial window substring and corresponsing freq counter
    //     //let window = s.substring(windowLeft, windowRight);
    //     const windowCounter = {};
    //     // for (let char of window){
    //     //     windowCounter[char] = (windowCounter[char] + 1) || 1;
    //     //     }
    //     for (let i = windowLeft; i <= windowRight; i++){
    //         windowCounter[s[i]] = (windowCounter[s[i]] + 1) || 1;
    //     }

    //         while (windowRight <= s.length){

    //             if (compareCounters(tCounter, windowCounter)){
    //                 //return window;
    //                 return s.substring(windowLeft, windowRight + 1);
    //             }

    //             //if not found, decrement val of left char and shift window
    //             //windowCounter[window[0]] = windowCounter[window[0]] - 1;
    //             windowCounter[s[windowLeft]] = windowCounter[s[windowLeft]] - 1;
    //             windowLeft++;
    //             windowRight++;
    //             windowCounter[s[windowRight]] = (windowCounter[s[windowRight]] + 1) || 1;
    //             //window = s.substring(windowLeft, windowRight);
    //             //add new rightmost char to windowCounter
    //             //let lastNew = window[window.length - 1];
    //             //windowCounter[lastNew] = (windowCounter[lastNew] + 1) || 1;
                
    //         }

    //     //if we exited loop of current window size without returning a substring
    //     windowSize++;
    //     windowRight = windowSize - 1;
    //     windowLeft = 0;

    // }

    //return '';
    
    
};

/*A helper function to ensure that all key:value pairs of counter1 
 *are present in counter2. Vals in counter1 must be less than
  or equal to corresponsing vals in counter2. */
function compareCounters(counter1, counter2){
    for (let key in counter1){
        if (!counter2[key] || counter1[key] > counter2[key]){
            return false;
        }
    }

    return true;
}