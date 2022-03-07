/**
 * @author maneeshavenigalla
 * Implement the RandomizedSet class: RandomizedSet() Initializes the RandomizedSet object.
 */
 class RandomizedSet {
    constructor() {
        this.map = new Map();
        this.arr = [];
    }

    /** 
     * bool insert(int val) Inserts an item val into the set if not present. 
     * Returns true if the item was not present, false otherwise.
     * @param {number} val
     * @return {boolean}
     */
    insert(val) {
        if(this.map.has(val)) {
            return false;
        }

        this.arr.push(val);
        this.map.set(val, this.arr.length - 1);
        return true;
    };

    /** 
     * bool remove(int val) Removes an item val from the set if present. 
     * Returns true if the item was present, false otherwise.
     * @param {number} val 
     * @return {boolean}
     */
    remove(val) {
        if(!this.map.has(val)) {
            return false;
        }

        const [last, index] = [this.arr[this.arr.length - 1], this.map.get(val)];
    
        this.arr[index] = last;
        this.map.set(last, index);
        
        this.arr.pop();
        this.map.delete(val);
        
        return true;  
    };

    /** 
     * int getRandom() Returns a random element from the current set of elements 
     * (it's guaranteed that at least one element exists when this method is called).
     * Each element must have the same probability of being returned.
     * @return {number}
     */
    getRandom() {
        return this.arr[Math.floor(Math.random() * this.arr.length)];
    };
};


module.exports = RandomizedSet;