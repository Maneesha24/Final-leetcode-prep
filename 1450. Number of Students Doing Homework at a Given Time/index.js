/**
 * @author maneesha venigalla
 * Given two integer arrays startTime and endTime and given an integer queryTime. The ith student started doing their
 * homework at the time startTime[i] and finished it at time endTime[i]. Return the number of students doing their
 * homework at time queryTime. More formally, return the number of students where queryTime lays in the interval [startTime[i], endTime[i]] inclusive.
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number} queryTime
 * @return {number}
 */
var busyStudent = function (startTime, endTime, queryTime) {

    let result = 0;

    let length = startTime.length;

    for(let i = 0; i < length; i++) {
        if(startTime[i] <= queryTime && endTime[i] >= queryTime) {
            result++;
        }
    }
    return result;
};

module.exports = busyStudent;