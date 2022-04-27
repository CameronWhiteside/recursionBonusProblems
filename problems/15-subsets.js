/***********************************************************************
Write a function called `subsets` that will return all subsets of an array.

Examples:

subsets([]) // [[]]
subsets([1]) // [[], [1]]
subsets([1, 2]) // [[], [1], [2], [1, 2]]
subsets([1, 2, 3]) // [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]

Hint: For subsets([1, 2, 3]), there are two kinds of subsets:
  1. Those that do not contain 3 (all of these are subsets of [1, 2]).
  2. For every subset that does not contain 3, there is also a corresponding
     subset that is the same, except it also does contain 3.
***********************************************************************/

// your code here
const subsets = arr => {
  //base case for when array holds no values return nested code
  if (!arr.length) {
    return [[]]
  }
  //look at the first element in arr
  let firstElement = arr.shift()

  //define all sets that exclude element
  let setsWithoutElement = subsets(arr.slice())

  //define all sets that include element
  let setsWithElement = subsets(arr.slice()).map(subset => [firstElement, ...subset])

  //return a combination of both the inclusive and exclusive subsets
  return [...setsWithoutElement, ...setsWithElement]
}

console.log(subsets([1, 2]))

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = subsets;
} catch (e) {
  module.exports = null;
}
