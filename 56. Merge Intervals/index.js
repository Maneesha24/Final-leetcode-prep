/**
 * @author maneeshavenigalla
 * Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and
 * return an array of the non-overlapping intervals that cover all the intervals in the input.
 * @param {number[][]} intervals
 * @return {number[][]}
 */
 var merge = function (intervals) {

    if(!intervals.length) {
        return [];
    }

    intervals.sort((a, b) => a[0] - b[0]);
    let result = [intervals[0]];

    for(let i = 1; i < intervals.length; i++) {
        const [start, end] = intervals[i];
        const [startPrev, endPrev] = result[result.length - 1];

        if(endPrev >= start) {
            result.pop();
            result.push([startPrev, Math.max(end, endPrev)]);
        } else {
            result.push([start, end]);
        }
    }

    return result;

};

module.exports = merge;