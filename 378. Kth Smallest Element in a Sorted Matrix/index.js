/**
 * @author maneeshavenigalla
 * Given an n x n matrix where each of the rows and columns is sorted in ascending order, return the kth
 * smallest element in the matrix. Note that it is the kth smallest element in the sorted order, not the
 * kth distinct element. You must find a solution with a memory complexity better than O(n2).
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(matrix, k) {
    
    let length = (matrix[0].length * matrix.length) - k;
    let heap = [null, ...matrix.flat()];
    maxHeapify(heap);

    let min = 0;

    for(let i = 0; i <= length; i++) {
        min = removeMin(heap);
    }

    return min;
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

const removeMin = (heap) => {
    let min = heap[1];

    [heap[1], heap[heap.length - 1]] = [heap[heap.length - 1],heap[1]];
    heap.pop();
    maxHeapify(heap);

    return min;
}

module.exports = kthSmallest;