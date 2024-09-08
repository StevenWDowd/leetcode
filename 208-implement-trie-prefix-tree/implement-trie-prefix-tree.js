function Node(char){
    this.nextChars = new Set();
    //map of char:node
    this.children = new Map();
    this.char = char;
    this.isTerminal = true;
}


var Trie = function() {
    this.root = new Node('');

    //defeats the whole purpose. cut it, dummy
    this.words = new Set();
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    if (this.words.has(word)){
        //no need to go farther
    } else {
        this.words.add(word);
        let idx = 0;
        let currNode = this.root;
        while (idx < word.length){
            let letter = word[idx];
            //does letter exist in currNode's set?
            //if no:
            if (!currNode.nextChars.has(letter)){
                currNode.nextChars.add(letter);
                let neoNode = new Node(letter);
                currNode.children.set(letter, neoNode);
                if (word[idx+1]) currNode.isTerminal = false;
                currNode = neoNode;
                idx++;
            } else {
                //if yes
                let nextNode = currNode.children.get(letter);
                //no check needed?
                if (word[idx+1]) currNode.isTerminal = false;
                currNode = nextNode;
                idx++;
            }
        }
    }
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    return this.words.has(word);
    // let searching = true;
    // let idx = 0;
    // let currNode = this.root;
    // while (searching && idx < word.length){
    //     let letter = word[idx];
    //     if (currNode.)
    // }
    // return false;
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    let searching = true;
    let idx = 0;
    let currNode = this.root;
    while (searching && idx < prefix.length){
        let letter = prefix[idx];
        if (!currNode.nextChars.has(letter)) return false;
        let nextNode = currNode.children.get(letter);
        idx++;
        if (currNode.isTerminal && prefix[idx]) return false;
        currNode = nextNode;
    }
    return true;
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */