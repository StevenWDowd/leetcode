
var MinStack = function() {
    //an array of 2-element arrays
    //idx 0 is val, idx 1 is the current min element
    this.stack = [];
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    if (!this.stack.length){
        this.stack.push([val, val]);
    } else {
        let top = this.stack[this.stack.length - 1];
        if (top[1] > val){
            this.stack.push([val, val]);
        } else {
            this.stack.push([val, top[1]]);
        }
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    let top = this.stack.pop();
    //return top[0];
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1][0];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.stack[this.stack.length - 1][1];
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */