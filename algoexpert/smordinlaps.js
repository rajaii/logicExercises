//EASY:

function semordnilap(words) {
  //set the array to push into and return
  const smordinlaps = [];
  const w = new Set();

  //loop pushing into retArr
  for (let i = 0; i < words.length; i++) {
    w.add(words[i]);
    if (
      w.has(words[i].split('').reverse().join('')) &&
      words[i] !== words[i].split('').reverse().join('')
    ) {
      smordinlaps.push([words[i], words[i].split('').reverse().join('')]);
    }
  }

  return smordinlaps;
}
