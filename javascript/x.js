

//hard:
//https://leetcode.com/problems/text-justification/



//med
//https://leetcode.com/problems/verify-preorder-serialization-of-a-binary-tree/

//https://leetcode.com/problems/camelcase-matching/

//https://leetcode.com/problems/fizz-buzz-multithreaded/

//hadr: https://leetcode.com/problems/parse-lisp-expression/

//https://leetcode.com/problems/number-of-times-binary-string-is-prefix-aligned/

//https://leetcode.com/problems/can-make-palindrome-from-substring/

//==>
//https://leetcode.com/problems/number-of-days-between-two-dates/

const date1 = "2019-06-29";
const date2 = "2019-06-30";
const dayInMS = (1000 * 60 * 60 * 24);

const newDate1 = new Date(date1).getTime();
const newDate2 = new Date(date2).getTime();

const timeBetween = newDate2 - newDate1;

const days = timeBetween / dayInMS;





console.log(days)
