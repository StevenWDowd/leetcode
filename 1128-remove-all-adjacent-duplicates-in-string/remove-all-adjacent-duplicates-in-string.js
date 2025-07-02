/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function(s) {
    let chars = s.split('');
    let init = chars.pop();
    let stack = [init];
    let next = chars.pop();
    while (chars.length){
        let cand = stack.pop();
        if (cand === next){
            //rid of em
            next = chars.pop();
        } else {
            stack.push(cand);
            stack.push(next);
            next = chars.pop();
        }
    }
    console.log('stack is: ', stack);
    console.log('next is: ', next);
    if (stack.length){
        let cand =stack.pop();
        if (cand === next){
            //we're done
        } else {
            stack.push(cand);
            stack.push(next);
        }
    }
    stack.reverse();
    return stack.join('');
    return 
    
};