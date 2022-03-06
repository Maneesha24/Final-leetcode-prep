/**
 * @author maneeshavenigalla
 * The median is the middle value in an ordered integer list. If the size of the list is even, there
 * is no middle value and the median is the mean of the two middle values. Implement the MedianFinder class:
 * MedianFinder() initializes the MedianFinder object.
 */
class MedianFinder {

    constructor() {
        this.stream = [];
    }

    /** 
     * adds the integer num from the data stream to the data structure.
     * @param {number} num
     * @return {void}
     */
    addNum = function (num) {
        let left = 0;
        let right = this.stream.length - 1;

        while(left <= right) {
            let mid = Math.floor((left + right)/2);

            if(this.stream[mid] < num) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        this.stream.splice(left, 0,  num);
    };

    /**
     *  returns the median of all elements so far. Answers within 10-5 of the actual answer will be accepted.
     * @return {number}
     */
    findMedian = function () {
        if(this.stream.length % 2 ==0) {
            let mid = this.stream.length/2;
            return (this.stream[mid] + this.stream[mid-1])/2;
        } else {
            let mid = Math.floor(this.stream.length/2);
            return (this.stream[mid]);
        } 
    };
};
/** 
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */

module.exports = MedianFinder;