/**
 * @return {null|boolean|number|string|Array|Object}
 */
Array.prototype.last = function() {
    if (this.length < 1) return -1;
    //return(this[this.length -1]);
    let item = this.pop();
    this.push(item);
    return item;
};

/**
 * const arr = [1, 2, 3];
 * arr.last(); // 3
 */