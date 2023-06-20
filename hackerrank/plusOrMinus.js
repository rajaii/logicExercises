//Easy:

//o(n) runtime o(1)

function plusMinus(arr) {
  //counts
  let total = arr.length;
  const counts = {
    "+": 0,
    "-": 0,
    0: 0,
  };

  //loop and get counts of each element
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      counts["+"] = counts["+"] + 1;
    } else if (arr[i] < 0) {
      counts["-"] = counts["-"] + 1;
    } else {
      counts["0"] = counts["0"] + 1;
    }
  }

  //divide value / total and print accordingly from hashmap
  console.log(parseFloat(counts["+"] / total).toFixed(6));
  console.log(parseFloat(counts["-"] / total).toFixed(6));
  console.log(parseFloat(counts["0"] / total).toFixed(6));
}
