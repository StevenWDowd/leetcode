
var ProductOfNumbers = function() {
    this.nums = [];
};

/** 
 * @param {number} num
 * @return {void}
 */
ProductOfNumbers.prototype.add = function(num) {
    this.nums.push(num);
};

/** 
 * @param {number} k
 * @return {number}
 */
ProductOfNumbers.prototype.getProduct = function(k) {
    let prod = 1;
    let idx = this.nums.length - 1;
    while (k > 0){
        prod = prod * this.nums[idx];
        idx--;
        k--;
    }
    return prod;
};

/** 
 * Your ProductOfNumbers object will be instantiated and called as such:
 * var obj = new ProductOfNumbers()
 * obj.add(num)
 * var param_2 = obj.getProduct(k)
 */