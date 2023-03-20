//first sln o (n log n) time o(1) space (not counting the returned array):

function sortedSquaredArray(array) {
  return array.map(n => n ** 2).sort((a,b) => a - b);
}