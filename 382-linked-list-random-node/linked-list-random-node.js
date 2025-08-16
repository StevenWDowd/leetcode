/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 */
var Solution = function(head) {
    this.nodes = [];
    let curr = head;
    while (curr){
        this.nodes.push(curr);
        curr = curr.next;
    }
};

/**
 * @return {number}
 */
Solution.prototype.getRandom = function() {
    let len = this.nodes.length;
    let idx = Math.floor(Math.random() * len);
    return this.nodes[idx].val;
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(head)
 * var param_1 = obj.getRandom()
 */