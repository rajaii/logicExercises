<?php
//from codewars 7kyu https://www.codewars.com/kata/54ff3102c1bad923760001f3/train/php


function getCount($str) {
  $count = 0;
  $vowels = array('a', 'e', 'i', 'o', 'u');
  $a = str_split($str);
  for ($i = 0; $i < count($a); $i++) {
    if (in_array($a[$i], $vowels)) {
      $count += 1;
    }
  }
  return $count;
}


//edge cases: str has no vowels or all vowels or all but last isn't vowel
//?'s limits on time, space?

//$count = 0
//make an $vowels = ['a','e','i','o','u']
//split str('')
//loop str
//if !str[i] in $vowels
//$count += 1
?>

