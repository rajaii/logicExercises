//from codewars 4 kyu https://www.codewars.com/kata/52996b5c99fdcb5f20000004/train/javascript

function runoff(voters){
  //set an array to count the first choices given by voters
   
  console.log(voters)
  let counterArr = [];
  for (let i = 0; i < voters.length; i++) {
      counterArr.push(voters[i][0])
  }
  //if inot in counterArr (no votes in round 1) delete from voters lists
  //instructions unclear about what it means to remove them from the list
  // if it means to remove completely and not from first like I thought can use this to 
  //implement the logic to do that but deleting first ones with least votes worked on tests 
  //so using this to only handle the edge case where no votes on round 1
  for (let i = 0; i < voters.length; i++) {
    for (let j = 0; j < voters[i].length; j++) {
      if (!counterArr.includes(voters[i][j])) {
        voters[i].splice(j, 1);
      }
    }
  }
  
  //set an object to count each candidates votes
  let voterTag = {};
  
  for (let i = 0; i < counterArr.length; i++) {
    voterTag[counterArr[i]] = 1
  }
  //count votes for each candidate
  for (let i = 0; i < counterArr.length; i++) {
    for (let j = i + 1; j < counterArr.length; j++) {
      if (counterArr[i] === counterArr[j]) {
        voterTag[counterArr[i]] += 1
        break
        }
    }
  }
  
  //if only 2 candidates and 50 tie return undefined
  if (Object.keys(voterTag).length === 2) {
    console.log(`here: ${Object.values(voterTag)}`)
    if (Math.max(Object.values(voterTag)) === Object.values(voterTag)[0] && Math.max(Object.values(voterTag)) === Object.values(voterTag)[1]) {
      return undefined
  }
    }
  
  //check if winner and return it if not push counts into arr 
  let tagCounts = [];
  for (let k in voterTag) {
    tagCounts.push(voterTag[k])
    if (voterTag[k] > (counterArr.length / 2)) {
      return k
    } 
   
    }  
  
  //check for tie
  console.log(`tagcounts: ${tagCounts}`)
  const allEqual = arr => arr.every(v => v === arr[0]);
  if (allEqual(tagCounts)) {
    return undefined
  }
  
  //tag the minimum voteds so can remove from voters
   let min = Math.min(...tagCounts)
   
   let toRemoves = []
   
   for (let k in voterTag) {
     if (voterTag[k] === min) {
       toRemoves.push(k)
     }
   }
   //remove the least voted for 
  for (let i = 0; i < voters.length; i++) {
      if (toRemoves.includes(voters[i][0])) {
        voters[i].splice(0, 1)
      } 
  }
   //repeat the process with the new voters array
  return runoff(voters)
  
  
  
}

//?'s: limits on time or space? if 1 don't win ditch one with least votes from list :
//how do you define least votes?  least votes for first or most votes for least.  use tests to see
//edge cases: empty ballot, return empty, complete tie return undefined, 

//double loop tagging inner array
//push all first values into a separate array,
//find highest occurence in this array and see if is > 50% if so ret that value,
//if not, count to find lowest occurring chars in the array and loop back through voters
//and discard from voters
//repeat the same process

//tie case where both are 50%
//