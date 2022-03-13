/**
 * @author maneeshavenigalla
 * You are given a 0-indexed 1-dimensional (1D) integer array original, and two integers, m and n. You are tasked 
 * with creating a 2-dimensional (2D) array with m rows and n columns using all the elements from original. Return 
 * an m x n 2D array constructed according to the above procedure, or an empty 2D array if it is impossible.
 * @param {number[]} original
 * @param {number} m
 * @param {number} n
 * @return {number[][]}
 */
 var construct2DArray = function(original, m, n) {
    if(m * n != original.length) {
      return [];
  }

  let result = [];
  let k = 0;

  for(let i = 0; i < m; i++) {
      let arr = [];
      for(let j = 0; j < n; j++) {
          arr.push(original[k]);
          k++;
      }
      result.push(arr);
  }

  return result;  
};

module.exports = construct2DArray;