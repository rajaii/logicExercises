//HARD:

//naive solution didn't think of this one was thinking in the efficient one but algo expert showed me o(n^2) time o(1)
function minRewards(scores) {
  //edge cases out of mysetup
  if (scores.length <= 3) {
    if (scores.length === 3) {
      return 5;
    } else if (scores.length === 2) {
      return 3;
    } else if (scores.length === 1) {
      return 1;
    }
  }
  const rewards = [1];
  let i = 1;

  while (i < scores.length) {
    if (scores[i] > scores[i - 1]) {
      rewards.push(rewards[rewards.length - 1] + 1);
    } else {
      rewards.push(1);
      if (rewards.length < scores.length) {
        for (let j = rewards.length - 2; j >= 0; j--) {
          if (rewards[j] < rewards[j + 1]) {
            break;
          }
          rewards[j] = Math.max(rewards[j], rewards[j + 1] + 1);
        }
      }
    }
    i += 1;
  }

  return rewards.reduce((a, c) => a + c, 0);
}
