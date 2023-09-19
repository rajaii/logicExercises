//  Techseries:
//  next sec

//  Coderpro:
// session 2 do in Python from scratch, watch video again and again until get it

//  Algoexpert
//  Hash Tables
//  specialized storage paradigm
// https://josephharwood-62087.medium.com/recursion-and-binary-search-trees-in-javascript-ae965b9ea01d
//30 min:
//if have it good, but if lost look at hints
//50 min:
//hints if not done and testing check if on right track.
//60 min watch vid always to keep moving forward and learning
//always pseudo and ?'s first
//always comment
//always last proofread before clicking submit
//always refactor

//==> build queue from scratch go over the dft mthods and their visual appearance, see algy,
//  back to sorting redo quick sort video understand code and others, revisit invertBinaryTree do it with bft building queue from scratch,  work on dft with stack (iterative),

//For Ones I could do with help from theory walkthrough, hints, etc revisit later if have time or also maybe understodd conceptually but couldn't bring to code:
//later revisit (was able to do with theory walkthrough)
// longestPeak
//  nodeDepths
//  arrayOfProducts
//  minimumWaitingTime
//  zeroSumArray
// fournumberSum
// quickSort
//  find-loop constant space
//river-sizes

//later REDO for sure could not do at all => WAS STUMPED
//max-subset-sum-no-adjacent
//find-nodes-distance-k
//apartment-hunting

class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const x = new LinkedList(1);
x.next = new LinkedList(12);
x.next.next = new LinkedList(3);

const o = { x: 1 };

console.log(o[x]);
