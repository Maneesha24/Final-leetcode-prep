/**
 * @author maneeshavenigalla
 * Design a data structure that follows the constraints of a Least Recently Used
 * (LRU) cache. LRUCache(int capacity) Initialize the LRU cache with positive size capacity.
 * @param {number} capacity
 */
 class LRUCache {
    constructor(capacity) {
        this.cache = new Map();
        this.capacity = capacity;
    }

    /** 
     * Return the value of the key if the key exists, otherwise return -1.
     * @param {number} key
     * @return {number}
     */
    get(key) {
        if(!this.cache.has(key)) {
            return -1;
        }

        const val = this.cache.get(key);
        this.cache.delete(key);
        this.cache.set(key, val);
        return val;
    };

    /** 
     * Update the value of the key if the key exists. Otherwise, add the
     * key-value pair to the cache. If the number of keys exceeds the capacity
     * from this operation, evict the least recently used key.
     * @param {number} key 
     * @param {number} value
     * @return {void}
     */
    put(key, value) {

        if(this.cache.has(key)) {
            this.cache.delete(key);
        }
        this.cache.set(key, value);

        if(this.cache.size > this.capacity) {
            this.cache.delete(this.cache.keys().next().value)
        }
    };
};


module.exports = LRUCache;