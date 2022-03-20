/**
 * @author maneeshavenigalla
 * There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are
 * given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi
 * first if you want to take course ai. 
 * For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
 * Return true if you can finish all courses. Otherwise, return false.
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {

    let prereqObj = {};

    for(let i = 0; i < numCourses; i++) {
        prereqObj[i] = [];
    }

    for(const [course, prereq] of prerequisites) {
        prereqObj[course].push(prereq);
    }

    let visitSet = new Set();

    const dfs = (course) => {

        if(visitSet.has(course)) {
            return false;
        }

        if(prereqObj[course].length == 0) {
            return true;
        }


        visitSet.add(course);

        for(const prereq of prereqObj[course]) {
            if(!dfs(prereq)) {
                return false;
            }
        }

        visitSet.delete(course);
        prereqObj[course] = [];
        return true;
    }

    for(let i = 0;i < numCourses; i++) {
        if(!dfs(i)) {
            return false;
        }
    }
    return true;

};

module.exports = canFinish;