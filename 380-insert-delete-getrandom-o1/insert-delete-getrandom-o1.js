
var RandomizedSet = function() {
    this.setMap = new Map();
    this.idxMap = new Map();
    this.counter = 0;
    //this.indices = new Set();
    //keep track of cleared indices in array?
    this.idxStack = [];


};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    if (!this.setMap.has(val)){
        if (!this.idxStack.length){
            this.setMap.set(val, this.counter);
            //this.indices.add(this.counter);
            this.idxMap.set(this.counter, val);
            this.counter++;
        } else {
            let oldIdx = this.idxStack.pop();
            this.setMap.set(val, oldIdx);
            //this.indices.add(oldIdx);
            this.idxMap.set(oldIdx, val);
            //no need to bump counter this time
        }
        return true;
    } else {
        //already present
        return false;
    }
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    if (this.setMap.has(val)){
        let idx = this.setMap.get(val);
        this.setMap.delete(val);
        this.idxMap.delete(idx);
        //this.indices.delete(idx);
        this.idxStack.push(idx);
        return true;
    } else {
        //was not present
        return false;
    }

};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    let randEl;
    //console.log('map is: ', this.idxMap);
    while (!randEl && randEl !== 0){
        let randIdx = Math.floor(Math.random() * this.counter);
        //console.log('counter is: ', this.counter);
        //console.log('randIdx is: ', randIdx);
        randEl = this.idxMap.get(randIdx);
        //console.log('randEl is: ', randEl);
    }
    return randEl;
};

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */