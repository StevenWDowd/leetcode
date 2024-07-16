
var RecentCounter = function() {
    this.counter = [];
};

/** 
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function(t) {
    this.counter.push(t);
    let reqCount = 0;
    for (let entry of this.counter){
        if (t - 3000 <= entry) reqCount++;
    }
    return reqCount;
};

/** 
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */