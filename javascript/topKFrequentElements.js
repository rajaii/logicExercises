//  from leetcode easy: https://leetcode.com/problems/top-k-frequent-elements

var topKFrequent = function(nums, k) {
  //sort nums and set the memory needed
  nums.sort((a,b) => a - b);
  const counts = [];
  const ret = [];
  let differentNumsCount = 0;
  
  //loop nums and count how many different nums
  for (let i = 0; i < nums.length; i++) {
      if (nums[i] === nums[i - 1] && nums[i-1] !== undefined) {
          continue;
      }
      
      differentNumsCount += 1;
  }
  
  //of the number of different nums push into counts empty arrays
  for (let i = 0; i < differentNumsCount; i++) {
      counts.push([]);
  }
  
  //loop nums and push the different ones into counts[j]  where j will tag the array counts
  let j = 0;
  for (let i = 0; i < nums.length; i++) {
      if (nums[i] === nums[i-1] || nums[i-1] === undefined) {
          counts[j].push(nums[i]);
      } else {
          j += 1;
          counts[j].push(nums[i]);
      }
  }
  
  //sort counts by length desc
  counts.sort((a,b) => b.length - a.length);
  
  //loop to k and push into ret counts[i]
  for (let i = 0; i < k; i++) {
      ret.push(counts[i][0]);
  }
  
  return ret;
};

//PSEUDO:
//sort nums
//set counts = []
//loop nums and count how many different nums
//ofr the number of different nums push into counts empty array

//set j = 0;
//loop nums 
//if nums[i] === nums[i-1] || nums[i-1] === undefined
  //push into counts[j] nums[i]
//else 
  //j += 1
  //push into counts[j] nums[i]

//sort counts by length desc

//loop to k and push into ret counts[i]

//refactor after study

var topKFrequent = function(nums, k) {
  //sort nums and set the memory needed
  const bucket = [];
  bucket.length = nums.length;
  const counts = {};
  const ret = [];
  
  for (let i = 0; i < nums.length; i++) {
      counts[nums[i]] = counts[nums[i]] + 1 || 1;
  }
  
  //loop nums and count in bucket
  for (let key in counts) {
      if (!bucket[counts[key]]) {
          bucket[counts[key]] = [parseInt(key)];
      } else {
          bucket[counts[key]].push(parseInt(key));
      }
      
  }
      
  //loop bucket backwards down k pushing bucket[i] into ret if defined 
  let iter = 0;
  for (let i = bucket.length - 1; i >= 0; i--) {
      if (iter === k) {
          break;
      }
      if (bucket[i]) {
          ret.push(bucket[i]);
          iter += bucket[i].length;
      }
  }
         
  return ret.flatMap(num => num);
};

