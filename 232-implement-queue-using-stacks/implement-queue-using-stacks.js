
var MyQueue = function() {
    this.queue = [];
    this.holder = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.queue.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    while(this.queue.length){
        this.holder.push(this.queue.pop());
    }
    let item = this.holder.pop();
    while(this.holder.length){
        this.queue.push(this.holder.pop());
    }
    return item;
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    if(this.queue.length){
        return this.queue[0];
    }

    return null;
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    if (!this.queue.length) return true;
    return false;
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */