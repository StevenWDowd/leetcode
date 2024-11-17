/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function(items, ruleKey, ruleValue) {
    let count = 0;
    for (let item of items){
        if (ruleKey === 'type'){
            if (item[0] === ruleValue) count++;
        }
        if (ruleKey === 'color'){
            if (item[1] === ruleValue) count++;
        }
        if (ruleKey === 'name'){
            if (item[2] === ruleValue) count++;
        }
    }
    return count;
};