//from hackerrank easy https://www.hackerrank.com/challenges/ctci-bubble-sort

//pre-walk through:

// ^=== end of list
// 1,4,2,6,4,6,8,4

// 1,2,4,4,6,6,4,8
//               ^

// 1,2,4,4,6,4,6,8
//             ^

//1,2,4,4,4,6,6,8
//          ^

//1,2,4,4,4,6,6,8
//        ^

//go through and swap if arr[i] > arr[i + 1] until end of list
//decrement end of list
//keep going until no swaps and at end of list