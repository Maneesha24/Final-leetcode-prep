/**
 * @author maneeshavenigalla
 * Given an integer array nums, return the third distinct maximum number in this array. If the
 * third maximum does not exist, return the maximum number.
 * @param {number[]} nums
 * @return {number}
 */
 var thirdMax = function(nums) {
    
    let heap = [null, ...new Set(nums)];
    maxHeapify(heap);

    if(heap.length <= 3) {
        return heap[1];
    }

    let max = 0;

    for(let i = 0; i < 3; i++) {
        max = removeHeap(heap);
    }

    return max;
};

const maxHeapify = (heap) => {
    let i = heap.length - 1;

    while(i > 1) {

        let parent = Math.floor(i/2);

        if(heap[i] > heap[parent]) {
            [heap[i], heap[parent]] = [heap[parent], heap[i]]
        }
        i--;
    }
}

const removeHeap = (heap) => {
    let max = heap[1];

    [heap[1], heap[heap.length - 1]] = [heap[heap.length - 1], heap[1]];
    heap.pop();
    maxHeapify(heap);

    return max;
}

module.exports = thirdMax;