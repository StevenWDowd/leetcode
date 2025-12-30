/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    let curr= num;
    let ans = [];
    while (curr > 0){
        if (curr >= 1000){
            let rem = curr % 1000;
            let quot = (curr - rem) / 1000;
            while (quot > 0){
                ans.push('M');
                quot--;
            }
            curr = rem;
        } else if (curr >= 900){
            let rem = curr % 900;
            let quot = (curr - rem) / 900;
            while (quot > 0){
                ans.push('CM');
                quot--;
            }
            curr = rem;
        } else if (curr >= 500){
            let rem = curr % 500;
            let quot = (curr - rem) / 500;
            while (quot > 0){
                ans.push('D');
                quot--;
            }
            curr = rem;
        } else if (curr >= 400){
            let rem = curr % 400;
            let quot = (curr - rem) / 400;
            while (quot > 0){
                ans.push('CD');
                quot--;
            }
            curr = rem;
        } else if (curr >= 100){
            let rem = curr % 100;
            let quot = (curr - rem) / 100;
            while (quot > 0){
                ans.push('C');
                quot--;
            }
            curr = rem;
        } else if (curr >= 90){
            let rem = curr % 90;
            let quot = (curr - rem) / 90;
            while (quot > 0){
                ans.push('XC');
                quot--;
            }
            curr = rem;
        } else if (curr >= 50){
            let rem = curr % 50;
            let quot = (curr - rem) / 50;
            while (quot > 0){
                ans.push('L');
                quot--;
            }
            curr = rem;
        } else if (curr >= 40){
            let rem = curr % 40;
            let quot = (curr - rem) / 40;
            while (quot > 0){
                ans.push('XL');
                quot--;
            }
            curr = rem;
        } else if (curr >= 10){
            let rem = curr % 10;
            let quot = (curr - rem) / 10;
            while (quot > 0){
                ans.push('X');
                quot--;
            }
            curr = rem;
        } else if (curr >= 9){
            let rem = curr % 9;
            let quot = (curr - rem) / 9;
            while (quot > 0){
                ans.push('IX');
                quot--;
            }
            curr = rem;
        } else if (curr >= 5){
            let rem = curr % 5;
            let quot = (curr - rem) / 5;
            while (quot > 0){
                ans.push('V');
                quot--;
            }
            curr = rem;
        } else if (curr >= 4){
            let rem = curr % 4;
            let quot = (curr - rem) / 4;
            while (quot > 0){
                ans.push('IV');
                quot--;
            }
            curr = rem;
        } else if (curr >= 1){
            let rem = curr % 1;
            let quot = (curr - rem) / 1;
            while (quot > 0){
                ans.push('I');
                quot--;
            }
            curr = rem;
        }
    }
    return ans.join('');
};