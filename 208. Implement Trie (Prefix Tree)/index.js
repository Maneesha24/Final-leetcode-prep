/**
 * @author maneeshavenigalla
 * A trie (pronounced as "try") or prefix tree is a tree data structure used to 
 * efficiently store and retrieve keys in a dataset of strings. There are various 
 * applications of this data structure, such as autocomplete and spellchecker.
 */
var Trie = function () {
    this.root = {};
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {

    let node = this.root;

    for(const char of word) {
        if(!(char in node)) {
            node[char] = {}
        }
        node = node[char];
    }

    node.isWord = true;
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
    const node = this.traverse(word);
    return node != null && node.isWord === true;
};

Trie.prototype.traverse = function (word) {
    let node = this.root;
    
    for (let char of word) {
      node = node[char];
      if (node == null) return null;
    }
    return node;
  }

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
    const node = this.traverse(prefix);
    return node != null;
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */


module.exports = Trie;