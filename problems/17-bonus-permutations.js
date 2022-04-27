/***********************************************************************
Write a recursive method permutations(array) that calculates all the
permutations of the given array. For an array of length n there are n! different
permutations. So for an array with three elements we will have 3 * 2 * 1 = 6
different permutations.

Examples:

permutations([1]) // [[1]]
permutations([1, 2]) // [[1, 2], [2, 1]]
permutations([1, 2, 3]) // [[1, 2, 3], [1, 3, 2],
                        // [2, 1, 3], [2, 3, 1],
                        // [3, 1, 2], [3, 2, 1]]
***********************************************************************/

// your code here
const permutations = nums => {
  //length of nums is 1, return array containing nums
  if (nums.length === 1) {
    return [nums]
  }

  //collect results
  let results = []

  nums.forEach((num, i) => {
    let copy = nums.slice()
    //pull out each num in nums individually
    copy.splice(i, 1)
    //now copy is equal to the remaining elements
    let remainingElementPermutations = permutations(copy)
    //create new permutations that start with num and end with permutations of remainder
    let permutationsWithNumInFront = remainingElementPermutations.map(perm => [num, ...perm])
    results.push(...permutationsWithNumInFront)
   })


  //return
  return results

}

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = permutations;
} catch (e) {
  module.exports = null;
}
