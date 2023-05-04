//EASY

//first sln o(log n) runtime o(1) space
function classPhotos(redShirtHeights, blueShirtHeights) {
  //  sort arrays
  redShirtHeights.sort((a,b) => a - b);
  blueShirtHeights.sort((a,b) => a - b);

  let smaller;
  let larger;
  if (redShirtHeights[0] < blueShirtHeights[0]) {
    smaller = redShirtHeights;
    larger = blueShirtHeights;
  } else {
    smaller = blueShirtHeights;
    larger = redShirtHeights;
  }

  //find one with smallest at index 0 and make sure all are smaller
  for (let i = 0; i < smaller.length; i++) {
    if (smaller[i] >= larger[i]) {
      return false;
    }
  }

  return true;
}