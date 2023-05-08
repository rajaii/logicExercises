//EASY:

//solution 1 o(n log n) time o(n) space
function tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest) {
  //  sort both lists
  redShirtSpeeds.sort((a,b) => a - b);
  blueShirtSpeeds.sort((a,b) => a - b); 

  //  run the logic to return max if fastest else min if not fastest
  let sum = 0;
  if (fastest) {
    const pairs = [];  
    let rightBlue = blueShirtSpeeds.length - 1;
    let leftBlue = 0;
    let rightRed = redShirtSpeeds.length - 1;
    let leftRed = 0;
    while (rightBlue >= leftBlue && rightRed >= leftRed) {
      if (redShirtSpeeds[rightRed] >= blueShirtSpeeds[rightBlue]) {
        pairs.push([redShirtSpeeds[rightRed], blueShirtSpeeds[leftBlue]]);
        rightRed -= 1;
        leftBlue += 1;
        continue;
      }

      if (blueShirtSpeeds[rightBlue] >= redShirtSpeeds[rightRed]) {
        pairs.push([redShirtSpeeds[leftRed], blueShirtSpeeds[rightBlue]]);
        leftRed += 1;
        rightBlue -= 1;
        continue;
      }
    }

    sum += pairs.reduce((a,c) => a + Math.max(...c), 0);
    
  } else {
    for (let i = 0; i < redShirtSpeeds.length; i++) {
      if (redShirtSpeeds[i] > blueShirtSpeeds[i]) {
        sum += redShirtSpeeds[i];
        continue;
      }

      sum += blueShirtSpeeds[i];
    }
  }

  return sum;
}

//solution 2 o(n log n) runtime o(1) space
function tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest) {
  //  sort both lists
  redShirtSpeeds.sort((a,b) => a - b);
  blueShirtSpeeds.sort((a,b) => a - b); 

  //  run the logic to return max if fastest else min if not fastest
  let sum = 0;
  if (fastest) {  
    let rightBlue = blueShirtSpeeds.length - 1;
    let leftBlue = 0;
    let rightRed = redShirtSpeeds.length - 1;
    let leftRed = 0;
    while (rightBlue >= leftBlue && rightRed >= leftRed) {
      if (redShirtSpeeds[rightRed] >= blueShirtSpeeds[rightBlue]) {
        sum += redShirtSpeeds[rightRed];
        rightRed -= 1;
        leftBlue += 1;
        continue;
      }

      if (blueShirtSpeeds[rightBlue] >= redShirtSpeeds[rightRed]) {
        sum += blueShirtSpeeds[rightBlue];
        leftRed += 1;
        rightBlue -= 1;
        continue;
      }
    }
    
  } else {
    for (let i = 0; i < redShirtSpeeds.length; i++) {
      if (redShirtSpeeds[i] > blueShirtSpeeds[i]) {
        sum += redShirtSpeeds[i];
        continue;
      }

      sum += blueShirtSpeeds[i];
    }
  }

  return sum;
}