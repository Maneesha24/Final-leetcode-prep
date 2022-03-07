/**
 * @author maneeshavenigalla
 * There is an undirected star graph consisting of n nodes labeled from 1 to n. A star graph is a graph where
 * there is one center node and exactly n - 1 edges that connect the center node with every other node. You are
 * given a 2D integer array edges where each edges[i] = [ui, vi] indicates that there is an edge between the nodes
 * ui and vi. Return the center of the given star graph.
 * @param {number[][]} edges
 * @return {number}
 */
 var findCenter = function(edges) {
    
    let index0 = edges[0][0];
    let index1 = edges[0][1];

    return edges.every(edge => edge.includes(index0)) ? index0 : index1;
};

module.exports = findCenter;