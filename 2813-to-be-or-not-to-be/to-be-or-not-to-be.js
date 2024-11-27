/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
    const choiceObj = {
        toBe: function(some){
            if (some === val) return true;
            if (some !== val){
                throw new Error('Not Equal');
            }

        },
        notToBe: function(some){
            if (val !== some) return true;
            if (val === some){
                throw new Error("Equal");
            }
        }

    }
    return choiceObj;
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */