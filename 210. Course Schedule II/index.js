/**
 * @author maneeshavenigalla
 * There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites
 * where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai. 
 * For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
 * Return the ordering of courses you should take to finish all courses. If there are many valid answers, return any of them. If it
 * is impossible to finish all courses, return an empty array.
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function (numCourses, prerequisites) {
    let prereqObj = {};
    let result = [];

    for (let i = 0; i < numCourses; i++) {
        prereqObj[i] = [];
    }

    for (const [course, prereq] of prerequisites) {
        prereqObj[course].push(prereq);
    }

    let visitSet = new Set();
    let cycleSet = new Set();

    const dfs = (course) => {

        if (cycleSet.has(course)) {
            return false;
        }

        if (visitSet.has(course)) {
            return true;
        }


        cycleSet.add(course);

        for (const prereq of prereqObj[course]) {
            if (!dfs(prereq)) {
                return false;
            }
        }

        cycleSet.delete(course);
        visitSet.add(course);
        result.push(course);
        return true;
    }

    for (let i = 0; i < numCourses; i++) {
        if (!dfs(i)) {
            return [];
        }
    }

    return result;
};

module.exports = findOrder;